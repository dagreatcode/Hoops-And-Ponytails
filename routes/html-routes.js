const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");

// VIEWS ROUTES
module.exports = (app) => {
router.get("/home", (req, res) => {
  if(req.email) {
      res.redirect("/home");
  }
  res.sendFile(path.join(__dirname, "../views/home.handlebars"));
});

router.get("/index", (req, res) => {
  res.sendFile(Path.join(__dirname, "../views/index.handlebars"))
});

router.get("/editteams", (req, res) => {
    res.sendFile(Path.join(__dirname, "../views/editteams.handlebars"))
});

  router.get("/teamchallenge", (req, res) => {
    res.sendFile(Path.join(__dirname, "../views/teamchallenge.handlebars"))
});
}


