const express = require("express");
const burgerModel = require("../models/burger");

const app = express();

app.get("/", function (req, res) {
    burgerModel.getBurgers((burgers) =>
        res.render("index", { burgers: burgers })
    );
});
app.post("/", function (req, res) {
    burgerModel.createBurger(req.body.burger_name);
    res.redirect("/");
});
app.post("/api/devour/:id", function (req, res) {
    burgerModel.devourBurger(req.params.id);
    res.json({ request: "sent" });
});

module.exports = app;
