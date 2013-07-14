var express = require('express');

var app = express.createServer(express.logger());

var str = fs.readFileSync(index.html);
var buffedStr = str.toString();


app.get('/', function(request, response) {
  response.send(buffedStr);
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
