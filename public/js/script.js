const $ = require( "jquery" )

$.ajax({
    url: "http://api.sportradar.us/wnba/trial/v7/en/players/03e541cb-d11c-4975-b656-f6e7febcda7d/profile.json?api_key=226774v99bae546n3skmrm3a",
    method: "GET"
}).then(function(response) {
    console.log(response);
});