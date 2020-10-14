// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================
// var path = require("path");

// // Routes
// // =============================================================
// module.exports = function(app) {

//   // Each of the below routes just handles the HTML page that the user gets sent to.

//   // index route loads view.html
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

//   app.get("/cms", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/cms.html"));
//   });

//   // blog route loads blog.html
//   app.get("/blog", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

// };

// router.get("/name of handlebars file", (req, res) => {
//     // ALL the Things should be displayed
//     // DB query
//     db.index.findAll().then((allThings) => {
//       res.render("name of handlebars file", { allThings: allThings });
//     });
//   });
