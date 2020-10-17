  
const { default: Axios } = require("axios");
const express = require("express");
const router = express.Router();
const db = require("../models");
const apiURL = "http://api.sportradar.us/wnba/trial/v7/en/players/03e541cb-d11c-4975-b656-f6e7febcda7d/profile.json?api_key="
const apiKey = "226774v99bae546n3skmrm3a"


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

//Third Party API Calls//======================================================================================
};
