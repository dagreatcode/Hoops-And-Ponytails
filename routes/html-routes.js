const express = require("express");
// const router = express.Router();
const db = require("../models");
const path = require("path");
const app = express();

// VIEWS ROUTES
module.exports = function(app){
  app.get("/", (req, res) => {
    res.render("index")
  });

  app.get("/editteams", (req,res)=> {
    res.render("");
    // res.send("works");
    
  })
  app.get("/teamchallenge", (req, res) => {
    res.render("teamchallenge")
});
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

  

// module.exports = router;

