const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "db", "freaky-fashion.sqlite");

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price INTEGER NOT NULL,
      sku TEXT NOT NULL,
      image TEXT NOT NULL
    )
  `);

  db.get("SELECT COUNT(*) AS count FROM products", (error, row) => {
    if (error) {
      console.error(error.message);
      return;
    }

    if (row.count === 0) {
      db.run(`
        INSERT INTO products (name, price, sku, image)
        VALUES
        ('Svart T-shirt', 299, 'TSHIRT-BLACK', 'https://placehold.co/300x400'),
        ('Vit hoodie', 599, 'HOODIE-WHITE', 'https://placehold.co/300x400')
      `);
    }
  });
});

module.exports = db;