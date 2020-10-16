const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");
const { sequelize, Team } = require("../models");
const app = express();


// VIEWS ROUTES
module.export = function(app){
  app.get("/", (req, res) => {
    
    res.redirect("index")
  });

  app.get("/teamchallenge", (req,res)=> {
      // res.render("teamchallenge",{
      //   testing:"example text"
      // })

      Team.findAll({
        where: {
          userId: req.user_id
        }
      }).then((teams)=> {
        res.render("teams", {teams: teams} )

        
      })
    //get teams by userid 
    //
    // res.render("team");
    // res.
    // res.send("works");
  })
};

  // 
  // if(req.email) {
      
  // }

  
  // app.get("/", function(req, res) {
  //   ;
  // });
  // res.redirect(path.join(__dirname, "../views/home.handlebars"))
  // res.sendFile()
  // res.redirect("/home");
  // console.log("maybe worked")
  // res.sendFile(path.join(__dirname, "../views/home.handlebars"));


// router.get("/index", (req, res) => {

//   res.sendFile(Path.join(__dirname, "../views/index.handlebars"))
// });

// router.get("/editteams", (req, res) => {
//     res.sendFile(Path.join(__dirname, "../views/editteams.handlebars"))
// });

//   router.get("/teamchallenge", (req, res) => {
//     res.sendFile(Path.join(__dirname, "../views/teamchallenge.handlebars"))
// });

module.exports = router;

