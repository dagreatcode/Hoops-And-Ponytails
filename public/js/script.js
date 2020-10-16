const express = require('express');
const request = require('request');
const app = express();

const apiURL = "http://api.sportradar.us/wnba/trial/v7/en/players/03e541cb-d11c-4975-b656-f6e7febcda7d/profile.json?api_key="
const apiKey = "226774v99bae546n3skmrm3a"

app.get('/_getproduct/:id', function(req, res) {
    if (!req.params.id) {
        res.status(500);
        res.send({"Error": "Looks like you are not sending a valid request"});
        console.log("Looks like you are not sending a valid request");
    }
   request.get({ url: apiURL + apiKey },      function(error, response, body) {
           if (!error && response.statusCode == 200) {
               res.json(body);
              }
          });
  });


// $.ajax({
//     url: "http://api.sportradar.us/wnba/trial/v7/en/players/03e541cb-d11c-4975-b656-f6e7febcda7d/profile.json?api_key=226774v99bae546n3skmrm3a",
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
// });