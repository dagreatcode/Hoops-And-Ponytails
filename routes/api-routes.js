  
const  axios  = require("axios");
const express = require("express");
const router = express.Router();
const db = require("../models");

// model for user
// model for player
// model for team
// db.User.findAll({})
// db.Team.findAll({})
// db.Player.findAll({})



axios.get(
   "http://api.sportradar.us/wnba/trial/v7/en/league/hierarchy.json?api_key=226774v99bae546n3skmrm3a"
   
).then(function (res){
  // console.log(res.data)
  var teams = [];

  var conferences = res.data.conferences
  for(var i= 0; i< conferences.length; i++){
    for(var t=0; t<conferences[i].teams.length; t++ ){
      teams.push({teamId:conferences[i].teams[t].id, teamName: conferences[i].teams[t].name})
    }
  }
  return teams
}).then(function(teams){
  // console.log(teams)
  var index = 0;
  var players = [];
  function getData(){
    var url = "http://api.sportradar.us/wnba/trial/v7/en/teams/" + teams[index].teamId + "/profile.json?api_key=226774v99bae546n3skmrm3a" ;
      axios.get(url).then(function (res){
        var teamRoster = res.data.players;
        for(var p=0; p< teamRoster.length; p++ ){
          players.push({playerId: teamRoster[p].id, playerName: teamRoster[p].full_name, jerseyNumber: teamRoster[p].jersey_number,position: teamRoster[p].position, exp:teamRoster[p].experience  })
        };
        return players
    }).then(function(players){
      setTimeout( ()=>{
        index++;
       if(index < teams.length-1) {
         console.log("true")
        getData();
       }else {
        console.log(players);
        res.send(players);
        console.log("false")
       }
      },1000)
      
    }).catch((err)=>{
      if (err) {
        console.log(err);
        console.log("error in players call")
      };
    });
  }
  getData();
});

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





module.exports = function(app) {



// //======================================================================================
//     // GET route for getting all of the users
    router.get("/api/user/", function(req, res) {
        db.User.findAll()
        .then(function(dbUserGet) {
            res.json(dbUserGet);
        });
    });

// GET route for getting all of the teams
  router.get("/api/team/", function(req, res) {
    db.Team.findAll()
      .then(function(dbTeamGet) {
        res.json(dbTeamGet);
      });
  });

     // GET route for getting all of the players
 router.get("/api/player/", function(req, res) {
    db.Player.findAll()
      .then(function(dbPlayerGet) {
        res.json(dbPlayerGet);
      });
  });

// //======================================================================================
   // Get route for retrieving a single user
  router.get("/api/user/:user_id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.user_id
      }
    })
      .then(function(dbUserSingle) {
        res.json(dbUserSingle);
      });
  });

  // Get route for retrieving a single team
  router.get("/api/team/:team_id", function(req, res) {
    db.Team.findOne({
      where: {
        id: req.params.team_id
      }
    })
      .then(function(dbTeamSingle) {
        res.json(dbTeamSingle);
      });
  });

  // Get route for retrieving a single player
  router.get("/api/player/:player_id", function(req, res) {
    db.Player.findOne({
      where: {
        id: req.params.player_id
      }
    })
      .then(function(dbPlayerSingle) {
        res.json(dbPlayerSingle);
      });
  });




//   //===Delete Routes===================================================================================

  // DELETE route for deleting users
  router.delete("/api/user/:user_id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.user_id
      }
    })
      .then(function(dbUserDelete) {
        res.json(dbUserDelete);
      });
  });

  // DELETE route for deleting teams
  router.delete("/api/team/:team_id", function(req, res) {
    db.Team.destroy({
      where: {
        id: req.params.team_id
      }
    })
      .then(function(dbTeamDelete) {
        res.json(dbTeamDelete);
      });
  });
   // DELETE route for deleting players
   router.delete("/api/player/:player_id", function(req, res) {
    db.Player.destroy({
      where: {
        id: req.params.player_id
      }
    })
      .then(function(dbPlayerDelete) {
        res.json(dbPlayerDelete);
      });
  });

//   //======================================================================================

  // PUT route for updating users
  router.put("/api/user", function(req, res) {
    db.User.update(req.body,
      {
        where: {
          id: req.body.user_id
        }
      })
      .then(function(dbUserPut) {
        res.json(dbPlayerPut);
      });
  });

    // PUT route for updating teams
  router.put("/api/team", function(req, res) {
    db.Team.update(req.body,
      {
        where: {
          id: req.body.team_id
        }
      })
      .then(function(dbTeamPut) {
        res.json(dbTeamPut);
      });
  });

   // PUT route for updating players
   router.put("/api/player", function(req, res) {
    db.Player.update(req.body,
      {
        where: {
          id: req.body.player_id
        }
      })
      .then(function(dbPlayerPut) {
        res.json(dbPlayerPut);
      });
  });
}
