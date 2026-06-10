const express = require("express");
const path = require("path");
const db = require("./database");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  db.all("SELECT * FROM products", (error, products) => {
    if (error) {
      console.error(error.message);
      return res.status(500).send("Något gick fel när produkterna skulle hämtas.");
    }

    res.render("index", {
      title: "Freaky Fashion",
      products: products
    });
  });
});

app.get("/admin", (req, res) => {
  db.all("SELECT * FROM products", (error, products) => {
    if (error) {
      console.error(error.message);
      return res.status(500).send("Något gick fel när produkterna skulle hämtas.");
    }

    res.render("admin", {
      title: "Admin",
      products: products
    });
  });
});

app.post("/admin/products", (req, res) => {
  const { name, price, sku, image } = req.body;

  db.run(
    "INSERT INTO products (name, price, sku, image) VALUES (?, ?, ?, ?)",
    [name, price, sku, image],
    (error) => {
      if (error) {
        console.error(error.message);
        return res.status(500).send("Något gick fel när produkten skulle sparas.");
      }

      res.redirect("/admin");
    }
  );
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  db.get("SELECT * FROM products WHERE id = ?", [productId], (error, product) => {
    if (error) {
      console.error(error.message);
      return res.status(500).send("Något gick fel när produkten skulle hämtas.");
    }

    if (!product) {
      return res.status(404).send("Produkten kunde inte hittas.");
    }

    res.render("product", {
      title: product.name,
      product: product
    });
  });
});

app.post("/admin/products/:id/delete", (req, res) => {
  const productId = req.params.id;

  db.run("DELETE FROM products WHERE id = ?", [productId], (error) => {
    if (error) {
      console.error(error.message);
      return res.status(500).send("Något gick fel när produkten skulle tas bort.");
    }

    res.redirect("/admin");
  });
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});