var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
// app.use(serveStatic(__dirname));
app.use(express.static(__dirname + '/static'));
var port = process.env.PORT || 5000;
app.get('*', function(req, res) {
  res.render('index');
});
app.listen(port);
console.log('server started ' + port);