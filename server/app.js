var express = require('express');
var app = express ();
var port = 3000;


app.use(express.static('server/public', {
  index: 'views/index.html'
}));

app.listen(port);
console.log("listening on port ", port);
