var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'));

var port = Number(process.env.PORT || 3000);

app.listen(port, function() {
  console.log("Listening on " + port);
});