const express = require("express");
// const router = express.Router();
const db = require("../models");
const path = require("path");
const { sequelize, Team } = require("../models");
const axios = require('axios');
// const Connection = require("mysql2/typings/mysql/lib/Connection");


// VIEWS ROUTES
module.exports = function(app){
  app.get("/", (req, res) => {
    
    // if (!userData.username) {
    //   return;
    // }
  
    res.redirect("index")
  });

  app.get("/teamchallenge", (req,res)=> {
    res.render("teamchallenge");
      // res.render("teamchallenge",{
      //   testing:"example text"
      // })
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
  app.get("/index", (req, res) => {
    res.render("index")
  });

  // //build your team 
  app.get("/buildyourteam", (req, res) => {

  //   var dbQuery = "SELECT name FROM playerList";
  //   connection.createQuery()

        db.PlayerList.findAll()
        .then(function (data){
         
          console.log(data);
          res.render("buildyourteam", {players: data})
        }).catch ((err)=> {
          console.log(err)
        });
  });

 
  app.get("/editteams", (req,res) => {
    db.Player.findAll({
      where: pla
    })
    res.render("editteams")
  });
  app.get("/yourteam", (req,res) => {
    res.render("yourteam")
  });
  
  app.get("/home", (req,res) => {
    res.render("home")
  });
  app.get("/signup", (req,res) => {
    res.render("signup");
  })
};

