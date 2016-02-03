var express = require('express');

// Constants
var PORT = 3000;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n We are up and running on ' + PORT);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
