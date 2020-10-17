const express = require("express");
const app = express.Router();
const db = require("../models");



module.exports = function (app) {

    
   
    //read player by id 
    //delete player by id 

    //create a player 
    //POST route to create a player 
    app.post("/api/player/:id", function (req,res){
        db.Player.create(req.body).then(function(playerPost){
            res.json(playerPost)
        })
    })


   // GET route for getting all of the players
   app.get("/api/player/", function (req, res) {
    db.Player.findAll()
      .then(function (dbPlayerGet) {
        res.json(dbPlayerGet);
      });
  });

  // Get route for retrieving a single player
  app.get("/api/player/:id", function (req, res) {
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
      app.delete("/api/player/:id", function (req, res) {
        db.Player.destroy({
            where: {
              id: req.params.player_id
            }
          })
          .then(function (dbPlayerDelete) {
            res.json(dbPlayerDelete);
          });
      });

    //    // PUT route for updating players
    // app.put("/api/player", function (req, res) {
    //     db.Player.update(req.body, {
    //         where: {
    //           id: req.body.player_id
    //         }
    //       })
    //       .then(function (dbPlayerPut) {
    //         res.json(dbPlayerPut);
    //       });
    //   });


};