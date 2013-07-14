var express = require('express');

var app = express.createServer(express.logger());

var str = fs.readFileSync(index.html);
var buffedStr = str.toString("utf-8",0,20);


app.get('/', function(request, response) {
  response.send(buffedStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
