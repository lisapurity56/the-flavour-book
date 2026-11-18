import json
import tempfile
import threading
import unittest
import urllib.error
import urllib.request
from pathlib import Path

from server import FlavorBookHandler, FlavorBookServer


class FlavorBookApiTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp_directory = tempfile.TemporaryDirectory()
        database_path = Path(cls.temp_directory.name) / "test.sqlite3"
        cls.server = FlavorBookServer(("127.0.0.1", 0), FlavorBookHandler, database_path)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base_url = f"http://127.0.0.1:{cls.server.server_port}"
        cls.client_id = "12345678-1234-1234-1234-123456789abc"

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()
        cls.temp_directory.cleanup()

    def setUp(self):
        with self.server.server_context if False else open("/dev/null", "w"):
            pass

    def request_json(self, path, method="GET", payload=None):
        data = json.dumps(payload).encode("utf-8") if payload is not None else None
        request = urllib.request.Request(
            self.base_url + path,
            data=data,
            method=method,
            headers={"Content-Type": "application/json"} if data is not None else {},
        )
        try:
            with urllib.request.urlopen(request) as response:
                return response.status, json.load(response)
        except urllib.error.HTTPError as error:
            return error.code, json.load(error)

    def test_recipe_crud_and_validation(self):
        recipe = {
            "name": "Test soup",
            "category": "Dinner",
            "time": 25,
            "ingredients": ["Tomatoes"],
            "method": ["Cook gently."],
        }
        status, saved = self.request_json("/api/recipes", "POST", recipe)
        self.assertEqual(status, 201)
        self.assertTrue(saved["id"].startswith("recipe-"))

        status, recipes = self.request_json("/api/recipes")
        self.assertEqual(status, 200)
        self.assertEqual(recipes[0]["id"], saved["id"])
        self.assertEqual(recipes[0]["ingredients"], ["Tomatoes"])

        status, error = self.request_json("/api/recipes", "POST", {**recipe, "time": 0})
        self.assertEqual(status, 400)
        self.assertIn("Prep time", error["error"])

    def test_favorites_are_scoped_to_browser_client(self):
        recipe = {
            "name": "Favorite test",
            "category": "Lunch",
            "time": 15,
            "ingredients": ["Bread"],
            "method": ["Toast it."],
        }
        _, saved = self.request_json("/api/recipes", "POST", recipe)
        status, _ = self.request_json(
            "/api/favorites",
            "PUT",
            {"clientId": self.client_id, "recipeId": saved["id"], "favorite": True},
        )
        self.assertEqual(status, 200)

        _, favorites = self.request_json(f"/api/favorites?client_id={self.client_id}")
        self.assertEqual(favorites, [saved["id"]])
        other_client = "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"
        _, other_favorites = self.request_json(f"/api/favorites?client_id={other_client}")
        self.assertEqual(other_favorites, [])

        status, _ = self.request_json(
            "/api/favorites",
            "PUT",
            {"clientId": self.client_id, "recipeId": saved["id"], "favorite": False},
        )
        self.assertEqual(status, 200)

    def test_seed_endpoint_imports_missing_recipes_without_duplicates(self):
        with __import__("server").connect_database(self.server.database_path) as connection:
            connection.execute("DELETE FROM favorites")
            connection.execute("DELETE FROM recipes")
        seed = [{
            "id": "seeded-recipe",
            "name": "Seeded stew",
            "category": "Dinner",
            "time": 35,
            "ingredients": ["Beans"],
            "method": ["Simmer."],
        }]
        status, recipes = self.request_json("/api/recipes/seed", "POST", {"recipes": seed})
        self.assertEqual(status, 200)
        self.assertEqual(len(recipes), 1)
        self.assertEqual(recipes[0]["name"], "Seeded stew")
        status, recipes = self.request_json("/api/recipes/seed", "POST", {"recipes": seed})
        self.assertEqual(status, 200)
        self.assertEqual(len(recipes), 1)


if __name__ == "__main__":
    unittest.main()
