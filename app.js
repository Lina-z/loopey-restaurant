const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static("public")); // Make everything inside of public/ available

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views

app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials"); //tell HBS which directory we use for partials

// GET /
app.get("/", (req, res, next) => {
  console.log("we have received a request for the HOMEPAGE");
  res.render("home-page");
});

app.get("/contact", (req, res, next) => {
  res.render("contact-page");
});

app.listen(3000, () => {
  console.log("server listening on port 3000...");
});

app.get("/pizza/margarita", (req, res, next) => {
  const info = {
    name: "Margarita",
    price: 15,
    image: (src = "/images/margarita.jpg"),
  };

  res.render("product", info);
});

app.get("/pizza/veggie", (req, res, next) => {
  const info = {
      name: 'Veggie Pizza',
      recommendedDrink: 'power smoothie',
      ingredients: ['cherry tomatoes', 'basilicum', 'Olives'],
      image: (src = "/images/veggie.jpg"),
    };
  res.render("product", info);
});

app.get("/pizza/seafood", (req, res, next) => {
  const info = {
    name: "Seafood",
    price: 30,
    image: (src = "/images/seafood.jpg"),
  };
  res.render("product", info);
});
