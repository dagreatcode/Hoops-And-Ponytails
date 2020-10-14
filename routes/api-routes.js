var db = require("../models");

// model for user
// model for player
// model for team
// db.User.findAll({})
// db.Team.findAll({})
// db.Player.findAll({})

module.exports = function(app) {


    // full CRUD for users
    // change dbPost name

    // GET route for getting all of the users
    app.get("/api/user/", function(req, res) {
        db.Post.findAll({})
        .then(function(dbPost) {
            res.json(dbPost);
        });
    });

// GET route for getting all of the teams
  app.get("/api/team/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

     // GET route for getting all of the players
  app.get("/api/player/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });


   // Get route for retrieving a single user
  app.get("/api/user/:user_id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.user_id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single team
  app.get("/api/team/:team_id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.team_id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single player
  app.get("/api/player/:player_id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.player_id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting users
  app.delete("/api/user/:user_id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.user_id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting teams
  app.delete("/api/team/:team_id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.team_id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
   // DELETE route for deleting players
   app.delete("/api/player/:player_id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.player_id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating users
  app.put("/api/user", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.user_id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

    // PUT route for updating teams
  app.put("/api/team", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.team_id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

   // PUT route for updating players
   app.put("/api/player", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.player_id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
}