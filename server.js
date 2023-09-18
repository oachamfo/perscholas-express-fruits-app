//dependencies
//npm install jsx-view-engine react react-dom --save
//install express

const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");

const fruits = require("./models/fruits.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package
const vegetables = require("./models/vegetables.js");

//adding view templates
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//fruits routes
app.get("/fruits/", (req, res) => {
  // res.send(fruits);
  res.render("fruits/Index", { fruits: fruits });
});

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render("fruits/Show", {
    //second param must be an object
    fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  }); // renders the info using the appropriate template
});

//vegetables routes
app.get("/vegetables/", (req, res) => {
  //res.send(vegetables);
  res.render("vegetables/Index", { vegetables: vegetables });
});

app.get("/vegetables/:indexOfVegetablesArray", (req, res) => {
  //res.send(vegetables[req.params.indexOfVegetablesArray]);
  res.render("vegetables/Show", {
    //second param must be an object
    vegetable: vegetables[req.params.indexOfVegetablesArray], //there will be a variable available inside the ejs file called vegetable, its value is vegetables[req.params.indexOfVegetablesArray]
  }); // renders the info using the appropriate template
});

//listen on port 3000
app.listen(3000, () => {
  console.log("listening");
});
