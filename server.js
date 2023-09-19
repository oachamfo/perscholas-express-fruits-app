//dependencies
const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");

const fruits = require("./models/fruits.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package
const vegetables = require("./models/vegetables.js");

//adding view templates
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(express.urlencoded({ extended: false }));

//fruits routes
//Index
app.get("/fruits/", (req, res) => {
  // res.send(fruits);
  res.render("fruits/Index", { fruits: fruits });
});

//New
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new");
});

//Delete
//Update

//Create
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  fruits.push(req.body);
  console.log(fruits);
  //res.send("data received"); //to send message to the browser
  res.redirect("/fruits");
});

//Show
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render("fruits/Show", {
    //second param must be an object
    fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  }); // renders the info using the appropriate template
});

//vegetables routes
//Index
app.get("/vegetables/", (req, res) => {
  //res.send(vegetables);
  res.render("vegetables/Index", { vegetables: vegetables });
});

//New
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

//Delete
//Update

//Create
app.post("/vegetables", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  vegetables.push(req.body);
  console.log(vegetables);
  //res.send("data received"); //to send message to the browser
  res.redirect("/vegetables");
});

//Show
app.get("/vegetables/:indexOfVegetablesArray", (req, res) => {
  //res.send(vegetables[req.params.indexOfVegetablesArray]);
  res.render("vegetables/Show", {
    //second param must be an object
    vegetable: vegetables[req.params.indexOfVegetablesArray], //there will be a variable available inside the ejs file called vegetable, its value is vegetables[req.params.indexOfVegetablesArray]
  }); // renders the info using the appropriate template
});

//listen on port 3000
app.listen(3000, () => {
  console.log("listening...");
});
