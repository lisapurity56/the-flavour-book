# The Flavor Book

The app is served by a small Python HTTP server. Recipes are shared in a SQLite database; favorites are stored separately for each browser.

## Run locally

```sh
python3 server.py
```

Open <http://127.0.0.1:8000>. Python 3.9 or newer is required; the backend uses only the standard library. The SQLite database is created as `flavor_book.sqlite3` beside `server.py`. Set `DATABASE_PATH` to store it elsewhere, or set `HOST` and `PORT` to change the listening address and port.

The first app session seeds the cookbook with the included recipes. Existing recipes saved in that browser are imported into an empty database.

## API

- `GET /api/health` — check server status.
- `GET /api/recipes` — list recipes.
- `POST /api/recipes` — validate and add a recipe.
- `POST /api/recipes/seed` — import built-in or browser-migrated recipes without duplicating existing IDs.
- `GET /api/favorites?client_id=<uuid>` — list favorites for one browser.
- `PUT /api/favorites` — add or remove one favorite (`clientId`, `recipeId`, `favorite`).

The shared cookbook has no sign-in or access control. Anyone who can reach the server can read and edit its recipes. Favorites are scoped to a browser-generated ID stored in that browser's local storage.

## Test

```sh
python3 -m unittest
```
