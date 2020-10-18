$(document).ready(function (){

//variables 

var add = $("#addBtn");
var save = $("#saveBtn");
var name = $("#playerName");
var resultsDiv = $("#results")

var currentTeam = [];

//onclick for add button 

add.on("click", function (event){
    event.preventDefault(); 
    console.log("clicked add");
    var apiId = $(this).data("playerId")

    currentTeam.push(name);
    createTeamList();


    // var newPlayer = {
    //     api_player_id: apiId,
    //     player_name: 

    // }
    // $.ajax("api/player", )
    
    //create a player when added 
    //post create player
    //api call to 
    //get player 
    //add player to card 
})

save.on("click", function (event){
    event.preventDefault(); 
    console.log("clicked save");
    //create a team when save is clicked
    //post create team
    // redirect to view team page
})



});



function createPlayer (){
    $.ajax('')
}

function userLogin(username) {
    $.post("/api/login", {
      username: username,
    }).then(function() {
      window.location.replace("/home");
    }).catch(function(err) {
      console.log(err);
    });
  };


  function createTeamList (){

    resultsDiv.html("");
    //create tag 
  
  // attributes
    $(resultsDiv).attr("style", "margin: auto, width: 50%,padding: 10px")
    $(resultsCard).attr("class", "card");
   
    $(cardSection).attr("class", "card-section");
  
  //text for tag 
    $(cardSection).text(name);
  //append tag 
    $(resultsDiv).append(resultsCard,cardSection);


  }



