var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var strg = fs.readFileSync("index.html");
var buffedStrg = strg.toString("utf-8",0,20);


app.get('/', function(request, response) {
  response.send(buffedStrg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
