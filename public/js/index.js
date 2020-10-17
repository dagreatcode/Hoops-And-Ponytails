$(document).ready(function() {     
  
    var logInForm = $("form.login");
    var usernameInput = $("input#username-input");
  
    loginForm.on("submit", function(event) {
      event.preventDefault();
      console.log("clicked");
      
      var userData = {
        username: usernameInput.val().trim(),
      };
  
      if (!userData.username) {
        return;
      }
  
      userLogin(userData.username);
      usernameInput.val("");
  
      userLogin();
  
    });
  
    function userLogin(username) {
      $.post("/api/login", {
        username: username,
  
      }).then(function() {
        res.redirect("/home");
  
      }).catch(function(err) {
        console.log(err);
      });
    };
  
    function getUserLogin() {
      $.get("/api/user", function(req, res) {
        db.User.findAll()
        .then (function(dbUserGet) {
          res.json(dbUserGet);
        })
      })
    }
  })