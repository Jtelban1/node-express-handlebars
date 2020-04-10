var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

const burgerController = require("./controllers/burger_controller.js");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(burgerController);

app.listen(PORT, () => {
    console.log("app running at http://localhost:" + PORT);
});
