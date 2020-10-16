const express = require("express");
// const router = express.Router();
const db = require("../models");
const path = require("path");
const app = express();

// VIEWS ROUTES
module.exports = function(app){
  app.get("/", (req, res) => {
    res.render("index")
  });
  app.get("/editteams", (req,res)=> {
    res.render("");
  })
  app.get("/teamchallenge", (req, res) => {
    res.render("teamchallenge")
  });
  app.get("/index", (req, res) => {
    res.render("index")
    // do I need both this and the app.get for "/" ?
  });
  app.get("/signup", (req, res) => {
    res.render("signup")
  });
  app.get("/buildyourteam", (req, res) => {
    res.render("buildyourteam")
  });



};