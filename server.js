const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 8080;
//these 2 lines are needed for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.listen(PORT, () => console.log("Great Success!"))

const iceCreams = [
    { name: "vanilla", price: 10, awesomeness: 3 },
    { name: "chocolate", price: 4, awesomeness: 8 },
    { name: "banana", price: 1, awesomeness: 1 },
    { name: "green tea", price: 5, awesomeness: 7 },
    { name: "jawbreakers", price: 6, awesomeness: 2 },
    { name: "pistachio", price: 11, awesomeness: 15 }
  ];

  app.get('/icecreams/:name', (req, res) => {
    const targetFlavor = req.params.name
    const found = iceCreams.find(flavor => flavor.name === targetFlavor)
    res.render('flavor', found)
  })

  app.get("/icecreams", (req, res) => {

  });

  app.get("/", (req, res) => {
    res.render('index')
});