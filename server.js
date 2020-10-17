const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
    allowInsecurePrototypeAccess,
  } = require("@handlebars/allow-prototype-access");
const app = express();
const db = require("./models");
const apiRoutes = require("./routes/api-routes.js");
const htmlRoutes = require("./routes/html-routes.js");

const PORT = process.env.PORT || 8080;
//api key hiding 

//middleware 
//used to interpert spaces in urls 
app.use(express.urlencoded({ extended: true }));
//changing data into json
app.use(express.json());
// app.use(express.static("public"));

//view engine using handlebar to display our html pages
app.engine("handlebars", exphbs({ defaultLayout: "main", 
handlebars: allowInsecurePrototypeAccess(handlebars), }));
app.set("view engine", "handlebars");

//calling our api html routes 
apiRoutes(app);
htmlRoutes(app);


// // views routes
app.get("/", (req, res) => {
    res.render("index");
});
// api routes
// app.get("/api/config", (req, res) => {
//     res.json({
//         success: true,
//     });
// });

//running out server 
db.sequelize.sync().then(function (){
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});


