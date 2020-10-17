const express = require("express");
const app = express.Router();
const db = require("../models");




module.exports = function (app) {

    // GET route for getting all of the teams
    app.get("/api/team/", function (req, res) {
        db.Team.findAll()
          .then(function (dbTeamGet) {
            res.json(dbTeamGet);
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
    


    // PUT route for updating teams
    app.put("/api/team", function (req, res) {
        db.Team.update(req.body, {
            where: {
              id: req.body.team_id
            }
          })
          .then(function (dbTeamPut) {
            res.json(dbTeamPut);
          });
      });
  

}