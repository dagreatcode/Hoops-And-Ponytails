  
const express = require("express");
const router = express.Router();
const db = require("../models");

// model for user
// model for player
// model for team
// db.User.findAll({})
// db.Team.findAll({})
// db.Player.findAll({})

module.exports = function(app) {


//     // full CRUD for users
//     // change dbPlayer name
// //======================================================================================
//     // GET route for getting all of the users
    router.get("/api/user/", function(req, res) {
        db.User.findAll({})
        .then(function(dbUser) {
            res.json(dbUser);
        });
    });

// GET route for getting all of the teams
  router.get("/api/team/", function(req, res) {
    db.Team.findAll({})
      .then(function(dbTeam) {
        res.json(dbTeam);
      });
  });

     // GET route for getting all of the players
 router.get("/api/player/", function(req, res) {
    db.Player.findAll({})
      .then(function(dbPlayer) {
        res.json(dbPlayer);
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
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // Get route for retrieving a single team
  router.get("/api/team/:team_id", function(req, res) {
    db.Team.findOne({
      where: {
        id: req.params.team_id
      }
    })
      .then(function(dbTeam) {
        res.json(dbTeam);
      });
  });

  // Get route for retrieving a single player
  router.get("/api/player/:player_id", function(req, res) {
    db.Player.findOne({
      where: {
        id: req.params.player_id
      }
    })
      .then(function(dbPlayer) {
        res.json(dbPlayer);
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
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // DELETE route for deleting teams
  router.delete("/api/team/:team_id", function(req, res) {
    db.Team.destroy({
      where: {
        id: req.params.team_id
      }
    })
      .then(function(dbTeam) {
        res.json(dbTeam);
      });
  });
   // DELETE route for deleting players
   router.delete("/api/player/:player_id", function(req, res) {
    db.Player.destroy({
      where: {
        id: req.params.player_id
      }
    })
      .then(function(dbPlayer) {
        res.json(dbPlayer);
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
      .then(function(dbUser) {
        res.json(dbPlayer);
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
      .then(function(dbTeam) {
        res.json(dbTeam);
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
      .then(function(dbPlayer) {
        res.json(dbPlayer);
      });
  });
}
