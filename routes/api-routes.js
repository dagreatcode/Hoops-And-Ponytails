var db = require("../models");

module.exports = function(app) {

    // GET route for getting all of the users
    app.get("/api/User/", function(req, res) {
        db.Post.findAll({})
        .then(function(dbPost) {
            res.json(dbPost);
        });
    });

// GET route for getting all of the teams
  app.get("/api/Team/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

     // GET route for getting all of the players
  app.get("/api/Player/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });


  // Get route for retrieving a single team
  app.get("/api/Team/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single player
  app.get("/api/Player/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting teams
  app.delete("/api/Team/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
   // DELETE route for deleting players
   app.delete("/api/Player/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

    // PUT route for updating teams
  app.put("/api/Team", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

   // PUT route for updating players
   app.put("/api/Player", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
}