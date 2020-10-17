const express = require("express");
const app = express.Router();
const db = require("../models");



module.exports = function (app) {

    //create a player 
    //read all players 
    //read player by id 
    //delete player by id 

   // GET route for getting all of the players
   app.get("/api/player/", function (req, res) {
    db.Player.findAll()
      .then(function (dbPlayerGet) {
        res.json(dbPlayerGet);
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

       // PUT route for updating players
    app.put("/api/player", function (req, res) {
        db.Player.update(req.body, {
            where: {
              id: req.body.player_id
            }
          })
          .then(function (dbPlayerPut) {
            res.json(dbPlayerPut);
          });
      });


};