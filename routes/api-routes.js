  const axios = require("axios");
  const express = require("express");
  const app = express.Router();
  const db = require("../models");
  const apiURL = "http://api.sportradar.us/wnba/trial/v7/en/players/03e541cb-d11c-4975-b656-f6e7febcda7d/profile.json?api_key="
  const apiKey = "226774v99bae546n3skmrm3a"

var count = 0;


// function getStats(){
//   count++;
//   axios.get("http://api.sportradar.us/wnba/trial/v7/en/players/03e541cb-d11c-4975-b656-f6e7febcda7d/profile.xml?api_key=226774v99bae546n3skmrm3a")
// .then(function (res){
//   // var playerstats = res.data.seasons[1].teams[1]
//   console.log(res.data.seasons[3].teams.total);
//   // console.log("block",playerstats.average.Blocks )
//   // console.log("steals",playerstats.average.Steals)
//   // console.log("assists",playerstats.average.Assists)
//   // console.log("rebounds",playerstats.average.Rebounds)
//   // console.log("points",playerstats.average.points)
// }).catch((err)=>{
//   console.log(err);
// });

// }

// getStats();



  // axios.get("http://api.sportradar.us/wnba/trial/v7/en/teams/0699edf3-5993-4182-b9b4-ec935cbd4fcc/profile.json?api_key=226774v99bae546n3skmrm3a"
  // ).then(function(res){
  //   console.log(res.data.players)
  // // var teamRoster = res.data.players;
  //   //   for(var p=0; p< teamRoster.length; p++ ){
  //   //     players.push({teamId: teams[r].teamId, teamName: teams[r].teamName, playerId: teamRoster[p].id, playerName: teamRoster[p].full_name, jerseyNumber: teamRoster[p].jersey_number,position: teamRoster[p].position, exp:teamRoster[p].experience  })
  //   //   };
  //     // return players
  // }).catch((err)=>{
  //   if (err) {
  //     console.log("error in players call")
  //   };
  // });
  //   for (var r = 0; r< teams.length; r++){

  //     var url = "http://api.sportradar.us/wnba/trial/v7/en/teams/" + teams[r].teamId + "/profile.json?api_key=226774v99bae546n3skmrm3a" ;
  //     axios.get(url).then(function (res){
  //       var teamRoster = res.data.players;
  //       for(var p=0; p< teamRoster.length; p++ ){
  //         players.push({teamId: teams[r].teamId, teamName: teams[r].teamName, playerId: teamRoster[p].id, playerName: teamRoster[p].full_name, jerseyNumber: teamRoster[p].jersey_number,position: teamRoster[p].position, exp:teamRoster[p].experience  })
  //       };
  //       return players
  //     }).then(function(players){
  //       console.log(players);
  //     }).catch((err)=>{
  //       if (err) {
  //         console.log("error in players call")
  //       };
  //     });
  //   }
  // }).catch ((err)=> {
  //   if(err){ 
  //     console.log("error is overall get ")
  //   };
  // });





  module.exports = function (app) {

    // //======================================================================================
    //     // GET route for getting all of the users
    app.get("/api/user/", function (req, res) {
      db.User.findAll({})
        .then(function (dbUserGet) {
          res.json(dbUserGet);
        });
    });

    // GET route for getting all of the teams
    app.get("/api/team/", function (req, res) {
      db.Team.findAll()
        .then(function (dbTeamGet) {
          res.json(dbTeamGet);
        });
    });

    // GET route for getting all of the players
    app.get("/api/player/", function (req, res) {
      db.Player.findAll()
        .then(function (dbPlayerGet) {
          res.json(dbPlayerGet);
        });
    });

    // //======================================================================================
    // Get route for retrieving a single user
    app.get("/api/users/:username", function (req, res) {
      db.User.findAll({
        attributes: ['username'],
          where: {
            username: req.params.username
          }
        })
        .then(function (dbUserSingle) {
      
          console.log(dbUserSingle)
          res.send(dbUserSingle);
        });
    });

    // Get route for retrieving a single team
    app.get("/api/team/:team_id", function (req, res) {
      db.Team.findOne({
          where: {
            id: req.params.team_id
          }
        })
        .then(function (dbTeamSingle) {
          res.json(dbTeamSingle);
        });
    });

    // Get route for retrieving a single player
    app.get("/api/player/:player_id", function (req, res) {
      db.Player.findOne({
          where: {
            id: req.params.player_id
          }
        })
        .then(function (dbPlayerSingle) {
          res.json(dbPlayerSingle);
        });
    });




    //   //===Delete Routes===================================================================================

    // DELETE route for deleting users
    app.delete("/api/user/:user_id", function (req, res) {
      db.User.destroy({
          where: {
            id: req.params.user_id
          }
        })
        .then(function (dbUserDelete) {
          res.json(dbUserDelete);
        });
    });

    // DELETE route for deleting teams
    app.delete("/api/team/:team_id", function (req, res) {
      db.Team.destroy({
          where: {
            id: req.params.team_id
          }
        })
        .then(function (dbTeamDelete) {
          res.json(dbTeamDelete);
        });
    });
    // DELETE route for deleting players
    app.delete("/api/player/:player_id", function (req, res) {
      db.Player.destroy({
          where: {
            id: req.params.player_id
          }
        })
        .then(function (dbPlayerDelete) {
          res.json(dbPlayerDelete);
        });
    });

    //   //======================================================================================

    // PUT route for updating users
    // app.put("/api/user", function (req, res) {
    //   db.User.update(req.body, {
    //       where: {
    //         id: req.body.user_id
    //       }
    //     })
    //     .then(function (dbUserPut) {
    //       res.json(dbPlayerPut);
    //     });
    // });

    // // PUT route for updating teams
    // app.put("/api/team", function (req, res) {
    //   db.Team.update(req.body, {
    //       where: {
    //         id: req.body.team_id
    //       }
    //     })
    //     .then(function (dbTeamPut) {
    //       res.json(dbTeamPut);
    //     });
    // });

    // PUT route for updating players
    // app.put("/api/player", function (req, res) {
    //   db.Player.update(req.body, {
    //       where: {
    //         id: req.body.player_id
    //       }
    //     })
    //     .then(function (dbPlayerPut) {
    //       res.json(dbPlayerPut);
    //     });
    // });

    //Third Party API Calls//======================================================================================
    app.post("/players", function (req, res) {
      console.log(req.body)
      
    })


    app.put("/api/user/:username", function (req, res) {
      db.User.update(
        req.body , 
        {where: {username: req.body.username
        }})
      .then(function (dbUserPut) {
        res.json(dbUserPut);
      });
    });
  

  }