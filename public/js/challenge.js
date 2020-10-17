



  var resultsDiv = $(".challenge-results");
  var resultsCard = $('<div>');
  var cardDivider = $("<div>");
  var cardSection = $("<div>");

  $(".challenge-form").on("submit", function (event) {
    event.preventDefault();
    console.log("clicked");
    
    
    compareTeams(); 
  });
  
  var apiTeamsId = [];
  var apiPlayerId = [];
  var playerNames = [];

  //compare teams function 
  function compareTeams(){
    //league Hierarchy api call 
    $.ajax({
      url: "http://api.sportradar.us/wnba/trial/v7/en/league/hierarchy.json?api_key=226774v99bae546n3skmrm3a",
      method:"GET"
    }).then(function (res){
      for(var i= 0; i<11; i++){
        //east conference teams 
        var teamsIdEast = res[1].conferences[0].teams[i].id;
        //var teamsNameE = res[1].conferences[0].teams[i].name;
         //west conference teams 
        var teamsIdWest = res[1].conferences[1].nameteams[i].id;
        //var teamsNameW = res[1].conferences[1].teams[i].name;
        apiTeamsId.push(teamsIdEast);
        apiTeamsId.push(teamsIdWest);

        console.log(apiTeamsId);
      }
      $.ajax({
          url: "http://api.sportradar.us/wnba/trial/v7/en/teams/6f017f37-be96-4bdc-b6d3-0a0429c72e89/profile.json?api_key=226774v99bae546n3skmrm3a", 
          method: "GET"
      }).then(function(res) {
          //player Name 
          for(var i= 0; i<12; i++){
              var playersName = res.players[i].full_name; 
              playerNames.push(playersName);
                console.log(playerNames);
          }
      })

    });
    // createResultsCard();
  }
   //create the results card 
  function createResultsCard(){

    resultsDiv.html("");
    //create tag 
 
  // attributes
    $(resultsDiv).attr("style", "margin: auto, width: 50%,padding: 10px")
    $(resultsCard).attr("class", "card");
    $(cardDivider).attr("class","card-divider");
    $(cardSection).attr("class", "card-section");

  //text for tag 
    $(cardDivider).text("Winner: Team Name ");
    $(cardSection).text("Breakdown of stats winning");
  //append tag 
    $(resultsDiv).append(resultsCard,cardDivider,cardSection);

  };


//   var playersId = res.players[i].id;