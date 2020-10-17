const express = require("express");
// const router = express.Router();
const db = require("../models");
const path = require("path");
const { sequelize, Team } = require("../models");
const axios = require('axios')


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
    // do I need both this and the app.get for "/" ?
  });
  app.get("/signup", (req, res) => {
    res.render("signup")
  });
  app.get("/buildyourteam", (req, res) => {
    axios.get(
        "http://api.sportradar.us/wnba/trial/v7/en/league/hierarchy.json?api_key=226774v99bae546n3skmrm3a"

      ).then(function (res) {
        // console.log(res.data)
        var teams = [];

        var conferences = res.data.conferences
        for (var i = 0; i < conferences.length; i++) {
          for (var t = 0; t < conferences[i].teams.length; t++) {
            teams.push({
              teamId: conferences[i].teams[t].id,
              teamName: conferences[i].teams[t].name
            })
          }
        }
        return teams
      }).then(function (teams) {
       
        var index = 0;
        var players = [];
        console.log(teams[index]);
        function getData() {
          var url = "http://api.sportradar.us/wnba/trial/v7/en/teams/" + teams[index].teamId + "/profile.json?api_key=226774v99bae546n3skmrm3a";
          axios.get(url).then(function (res) {
            var teamRoster = res.data.players;
            for (var p = 0; p < teamRoster.length; p++) {
              players.push({
                playerId: teamRoster[p].id,
                playerName: teamRoster[p].full_name,
                jerseyNumber: teamRoster[p].jersey_number,
                position: teamRoster[p].position,
                exp: teamRoster[p].experience
              })
            };
            return players
          }).then(function (players) {
            setTimeout(() => {
              index++;
              if (index < teams.length - 1) {
                console.log("true")
                getData();
              } else {
                console.log("false")
                res.render("buildyourteam",{
                  players: players
                })
                // console.log(players);
                // res.send(players);
                // console.log("false")
              }
            }, 1000)

          }).catch((err) => {
            if (err) {
              console.log(err);
              console.log("error in players call")
            };
          });
        }
        setTimeout(getData,1000)
        
      });
    
  });
  app.get("/editteams", (req,res) => {
    res.render("editteams")
  });
  app.get("/yourteam", (req,res) => {
    res.render("yourteam")
  });
};


