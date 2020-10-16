// $(".delplayer").on("click", function(event) {
//     var id = $(this).data("playerid");

//     // Send the DELETE request.
//     $.ajax("/api/editplayers/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });


//   $("#updateteams").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var id = $("[name=id]").val().trim();

//     var updatedTeam = {
//       team: $("#updateteam [name=team]").val().trim()
//     };

//     // Send the PUT request.
//     $.ajax("/api/editplayers/" + id, {
//       type: "PUT",
//       data: updatedTeam
//     }).then(
//       function() {
//         console.log("updated id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });