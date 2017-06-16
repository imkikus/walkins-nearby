var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname));

var port = process.env.PORT || 5008;
app.get('*', function(req, res) {
  res.sendFile('index.html' , { root : __dirname});
});
app.listen(port);
console.log('server started ' + port);