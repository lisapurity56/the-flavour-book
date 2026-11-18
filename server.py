#!/usr/bin/env python3
"""SQLite-backed HTTP server for The Flavor Book."""

import json
import os
import re
import sqlite3
import uuid
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlsplit


BASE_DIR = Path(__file__).resolve().parent
DEFAULT_DATABASE = BASE_DIR / "flavor_book.sqlite3"
CATEGORIES = {"Breakfast", "Lunch", "Dinner", "Snack", "Dessert"}
CLIENT_ID_PATTERN = re.compile(r"^[a-f0-9-]{36}$")
RECIPE_ID_PATTERN = re.compile(r"^[a-zA-Z0-9_-]{1,100}$")
MAX_REQUEST_BYTES = 1_000_000
MAX_SEED_RECIPES = 100
MAX_LIST_ITEMS = 100
MAX_LIST_ITEM_LENGTH = 500


class ApiError(Exception):
    def __init__(self, status, message):
        super().__init__(message)
        self.status = status


def connect_database(path):
    connection = sqlite3.connect(path, timeout=10)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def initialize_database(path):
    if str(path) != ":memory:":
        Path(path).parent.mkdir(parents=True, exist_ok=True)
    with connect_database(path) as connection:
        connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS recipes (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                category TEXT NOT NULL,
                time INTEGER NOT NULL,
                emoji TEXT NOT NULL,
                tone TEXT NOT NULL,
                description TEXT NOT NULL,
                rating TEXT NOT NULL,
                ingredients TEXT NOT NULL,
                method TEXT NOT NULL,
                origin TEXT,
                region TEXT
            );
            CREATE TABLE IF NOT EXISTS favorites (
                client_id TEXT NOT NULL,
                recipe_id TEXT NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
                PRIMARY KEY (client_id, recipe_id)
            );
            """
        )


def validate_recipe(value, *, allow_id=False):
    if not isinstance(value, dict):
        raise ApiError(400, "Each recipe must be an object.")

    name = value.get("name")
    category = value.get("category")
    cooking_time = value.get("time")
    ingredients = value.get("ingredients")
    method = value.get("method")

    if not isinstance(name, str) or not name.strip() or len(name.strip()) > 70:
        raise ApiError(400, "Recipe name must be between 1 and 70 characters.")
    if category not in CATEGORIES:
        raise ApiError(400, "Choose a valid recipe category.")
    if isinstance(cooking_time, bool) or not isinstance(cooking_time, int) or not 1 <= cooking_time <= 1440:
        raise ApiError(400, "Prep time must be between 1 and 1440 minutes.")
    if not isinstance(ingredients, list) or not ingredients or len(ingredients) > MAX_LIST_ITEMS:
        raise ApiError(400, "Add between 1 and 100 ingredients.")
    if not isinstance(method, list) or not method or len(method) > MAX_LIST_ITEMS:
        raise ApiError(400, "Add between 1 and 100 method steps.")
    for items in (ingredients, method):
        if any(not isinstance(item, str) or not item.strip() or len(item) > MAX_LIST_ITEM_LENGTH for item in items):
            raise ApiError(400, "Recipe ingredients and method steps must be non-empty and at most 500 characters.")

    recipe_id = value.get("id")
    if allow_id:
        if not isinstance(recipe_id, str) or not RECIPE_ID_PATTERN.fullmatch(recipe_id):
            raise ApiError(400, "Recipe ID is invalid.")
    else:
        recipe_id = f"recipe-{uuid.uuid4().hex}"

    description = value.get("description", "")
    emoji = value.get("emoji", "🍽️")
    tone = value.get("tone", "tone-green")
    rating = value.get("rating", "5.0")
    origin = value.get("origin")
    region = value.get("region")
    for label, item, maximum in (
        ("Description", description, 180),
        ("Emoji", emoji, 20),
        ("Tone", tone, 40),
        ("Rating", rating, 10),
    ):
        if not isinstance(item, str) or len(item) > maximum:
            raise ApiError(400, f"{label} is invalid.")
    for label, item in (("Origin", origin), ("Region", region)):
        if item is not None and (not isinstance(item, str) or len(item) > 100):
            raise ApiError(400, f"{label} is invalid.")

    return {
        "id": recipe_id,
        "name": name.strip(),
        "category": category,
        "time": cooking_time,
        "emoji": emoji,
        "tone": tone,
        "description": description,
        "rating": rating,
        "ingredients": ingredients,
        "method": method,
        "origin": origin,
        "region": region,
    }


def recipe_from_row(row):
    recipe = dict(row)
    recipe["ingredients"] = json.loads(recipe["ingredients"])
    recipe["method"] = json.loads(recipe["method"])
    return recipe


class FlavorBookServer(ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = True

    def __init__(self, address, handler_class, database_path=DEFAULT_DATABASE):
        self.database_path = str(database_path)
        initialize_database(self.database_path)
        super().__init__(address, handler_class)


class FlavorBookHandler(SimpleHTTPRequestHandler):
    server_version = "FlavorBook/1.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def do_GET(self):
        request = urlsplit(self.path)
        if request.path == "/api/health":
            self.send_json(200, {"status": "ok"})
            return
        if request.path == "/api/recipes":
            with connect_database(self.server.database_path) as connection:
                rows = connection.execute("SELECT * FROM recipes ORDER BY rowid DESC").fetchall()
            self.send_json(200, [recipe_from_row(row) for row in rows])
            return
        if request.path == "/api/favorites":
            try:
                client_id = self.validate_client_id(parse_qs(request.query).get("client_id", [None])[0])
                with connect_database(self.server.database_path) as connection:
                    rows = connection.execute(
                        "SELECT recipe_id FROM favorites WHERE client_id = ? ORDER BY rowid",
                        (client_id,),
                    ).fetchall()
                self.send_json(200, [row["recipe_id"] for row in rows])
            except ApiError as error:
                self.send_json(error.status, {"error": str(error)})
            return
        if request.path.startswith("/api/"):
            self.send_json(404, {"error": "API endpoint not found."})
            return

        requested_path = unquote(request.path).lstrip("/") or "index.html"
        resolved_path = (BASE_DIR / requested_path).resolve()
        if not resolved_path.is_relative_to(BASE_DIR) or not resolved_path.is_file():
            self.send_json(404, {"error": "File not found."})
            return
        body = resolved_path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", self.guess_type(str(resolved_path)))
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        request = urlsplit(self.path)
        if request.path == "/api/recipes":
            try:
                recipe = validate_recipe(self.read_json())
                with connect_database(self.server.database_path) as connection:
                    self.insert_recipe(connection, recipe)
                self.send_json(201, recipe)
            except ApiError as error:
                self.send_json(error.status, {"error": str(error)})
            return
        if request.path == "/api/recipes/seed":
            self.seed_recipes()
            return
        if request.path.startswith("/api/"):
            self.send_json(404, {"error": "API endpoint not found."})
            return
        self.send_json(405, {"error": "Method not allowed."})

    def do_PUT(self):
        if urlsplit(self.path).path != "/api/favorites":
            self.send_json(404, {"error": "API endpoint not found."})
            return
        try:
            payload = self.read_json()
            client_id = self.validate_client_id(payload.get("clientId"))
            recipe_id = payload.get("recipeId")
            favorite = payload.get("favorite")
            if not isinstance(recipe_id, str) or not RECIPE_ID_PATTERN.fullmatch(recipe_id):
                raise ApiError(400, "Recipe ID is invalid.")
            if not isinstance(favorite, bool):
                raise ApiError(400, "Favorite must be true or false.")
            with connect_database(self.server.database_path) as connection:
                if not connection.execute("SELECT 1 FROM recipes WHERE id = ?", (recipe_id,)).fetchone():
                    raise ApiError(404, "Recipe not found.")
                if favorite:
                    connection.execute(
                        "INSERT OR IGNORE INTO favorites (client_id, recipe_id) VALUES (?, ?)",
                        (client_id, recipe_id),
                    )
                else:
                    connection.execute(
                        "DELETE FROM favorites WHERE client_id = ? AND recipe_id = ?",
                        (client_id, recipe_id),
                    )
            self.send_json(200, {"recipeId": recipe_id, "favorite": favorite})
        except ApiError as error:
            self.send_json(error.status, {"error": str(error)})

    def seed_recipes(self):
        try:
            payload = self.read_json()
            recipes = payload.get("recipes") if isinstance(payload, dict) else None
            if not isinstance(recipes, list) or not recipes or len(recipes) > MAX_SEED_RECIPES:
                raise ApiError(400, "Seed data must contain between 1 and 100 recipes.")
            normalized = [validate_recipe(recipe, allow_id=True) for recipe in recipes]
            with connect_database(self.server.database_path) as connection:
                connection.execute("BEGIN IMMEDIATE")
                for recipe in normalized:
                    self.insert_recipe(connection, recipe, ignore_conflict=True)
                rows = connection.execute("SELECT * FROM recipes ORDER BY rowid DESC").fetchall()
            self.send_json(200, [recipe_from_row(row) for row in rows])
        except ApiError as error:
            self.send_json(error.status, {"error": str(error)})

    def insert_recipe(self, connection, recipe, *, ignore_conflict=False):
        conflict_clause = "OR IGNORE " if ignore_conflict else ""
        connection.execute(
            f"""
            INSERT {conflict_clause}INTO recipes
                (id, name, category, time, emoji, tone, description, rating, ingredients, method, origin, region)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                recipe["id"],
                recipe["name"],
                recipe["category"],
                recipe["time"],
                recipe["emoji"],
                recipe["tone"],
                recipe["description"],
                recipe["rating"],
                json.dumps(recipe["ingredients"], ensure_ascii=False),
                json.dumps(recipe["method"], ensure_ascii=False),
                recipe["origin"],
                recipe["region"],
            ),
        )

    def validate_client_id(self, value):
        if not isinstance(value, str) or not CLIENT_ID_PATTERN.fullmatch(value):
            raise ApiError(400, "Client ID is invalid.")
        return value

    def read_json(self):
        content_length = self.headers.get("Content-Length")
        if not content_length:
            raise ApiError(400, "Request body is required.")
        try:
            length = int(content_length)
        except ValueError as error:
            raise ApiError(400, "Content-Length is invalid.") from error
        if length < 0 or length > MAX_REQUEST_BYTES:
            raise ApiError(413, "Request body is too large.")
        try:
            payload = json.loads(self.rfile.read(length))
        except (json.JSONDecodeError, UnicodeDecodeError) as error:
            raise ApiError(400, "Request body must be valid JSON.") from error
        if not isinstance(payload, dict):
            raise ApiError(400, "Request body must be a JSON object.")
        return payload

    def send_json(self, status, value):
        body = json.dumps(value, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format_string, *args):
        super().log_message(format_string, *args)


def main():
    host = os.environ.get("HOST", "127.0.0.1")
    port = int(os.environ.get("PORT", "8000"))
    database_path = os.environ.get("DATABASE_PATH", str(DEFAULT_DATABASE))
    server = FlavorBookServer((host, port), FlavorBookHandler, database_path)
    print(f"The Flavor Book is running at http://{host}:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping The Flavor Book.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
