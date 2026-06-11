# Freaky Fashion

Detta är ett skolprojekt i kursen **Backend-utveckling med JavaScript**.

Projektet är en enkel webbapplikation för en fiktiv webbshop där produkter visas på en startsida och kan hanteras via en admin-sida. Applikationen är byggd med Node.js, Express.js, EJS och SQLite.

---

## Funktioner

- Startsida med produkter
- Produktsida för varje produkt
- Admin-sida
- Lägg till produkter
- Ta bort produkter
- Produkter sparas i SQLite-databas
- Bilder hämtas från `public/images`
- Responsiv layout
- Mobile first-design
- Semantisk HTML
- Extern CSS
- Git och GitHub för versionshantering

---

## Tekniker

Projektet använder följande tekniker:

- Node.js
- Express.js
- EJS
- SQLite
- HTML
- CSS
- Git
- GitHub

---

## Projektstruktur

```text
freaky-fashion/
│
├── app.js
├── database.js
├── package.json
├── package-lock.json
├── README.md
│
├── db/
│   └── freaky-fashion.sqlite
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── images/
│       ├── black-tshirt.jpg
│       ├── blue-jacket.jpg
│       └── white-hoodie.jpg
│
└── views/
    ├── index.ejs
    ├── admin.ejs
    ├── product.ejs
    ├── layouts/
    │   └── main.ejs
    └── partials/
        ├── header.ejs
        └── footer.ejs
