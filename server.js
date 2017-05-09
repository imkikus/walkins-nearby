var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname));

// app.set('view options', {layout: false});
// app.set('view engine', 'html');
// app.use(express.static(__dirname));
var port = process.env.PORT || 5000;
app.get('*', function(req, res) {
  // res.sendFile('index.html' , { root : __dirname});
  res.sendFile("index.html");
});
app.listen(port);
console.log('server started ' + port);