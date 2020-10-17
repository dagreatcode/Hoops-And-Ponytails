var apiTeamsId = [];
var apiPlayerId = [];
var playerNames = [];
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
   //team profile to grab name and playerid
   $.ajax({
       url: "http://api.sportradar.us/wnba/trial/v7/en/teams/6f017f37-be96-4bdc-b6d3-0a0429c72e89/profile.json?api_key=226774v99bae546n3skmrm3a", 
       method: "GET"
   }).then(function(res) {
       //player Name 
       for(var i= 0; i<12; i++){
           var playersName = res.players[i].full_name; 
           var playerId = res.player[i].id
           playerNames.push(playersName);
           console.log(playerNames);
       }
   })

   for(var i =0; i> playerNames.length; i++){
   $.ajax({
       
       url: "http://api.sportradar.us/wnba/trial/v7/en/players/03e541cb-d11c-4975-b656-f6e7febcda7d/profile.json?api_key=226774v99bae546n3skmrm3a",
       method: "GET"
   }).then(function(res){ 
       

     
   })
   }
 });



var searchForm = $("#searchplayers");

searchForm.on("submit",function (event){
 event.preventDefault();
 console.log("clicked")
})




$(".delplayer").on("click", function(event) {
 var id = $(this).data("playerid");

 // Send the DELETE request.
 $.ajax("/api/editplayers/" + id, {
   type: "DELETE",
   data:dummy
 }).then(
   function() {
     console.log("deleted id ", id);
     // Reload the page to get the updated list
     location.reload();
   }
 );
});


$("#updateteams").on("submit", function(event) {
 // Make sure to preventDefault on a submit event.
 event.preventDefault();

 var id = $("[name=id]").val().trim();

 var updatedTeam = {
   team: $("#updateteam [name=team]").val().trim()
 };

 // Send the PUT request.
 $.ajax("/api/editplayers/" + id, {
   type: "PUT",
   data: updatedTeam
 }).then(
   function() {
     console.log("updated id ", id);
     // Reload the page to get the updated list
     location.reload();
   }
 );
});