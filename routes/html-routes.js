const express = require("express");
// const router = express.Router();
const db = require("../models");
const path = require("path");
const { sequelize, Team } = require("../models");
const app = express();


// VIEWS ROUTES
module.exports = function(app){
  app.get("/", (req, res) => {
    
    res.redirect("index")
  });

  app.get("/teamchallenge", (req,res)=> {
      res.render("teamchallenge")
      // Team.findAll({
      //   where: {
      //     userId: req.user_id
      //   }
      // }).then((teams)=> {
      //   res.render("teamschallenge", {teams: teams} )
      // }).catch((err)=> {
      //   console.log("err finding the teams")
      //   res.json({
      //     error:true,
      //   });
      // });
  });
  app.get("/signup", (req, res) => {
    res.render("signup")
  });
  app.get("/buildyourteam", (req, res) => {
    res.render("buildyourteam")
  });
  app.get("/yourteam", (req, res) => {
    res.render("yourteam")
  });
  app.get("/index", (req, res) => {
    res.render("index")
  });
  app.get("/home", (req, res) => {
    res.render("home")
  });
  app.get("/editteams", (req, res) => {
    res.render("editteams")
  });
};


