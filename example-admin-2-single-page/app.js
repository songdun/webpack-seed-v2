var express = require('express');
var app = express();
var webpackServer = require('./webpack.dev.server');
var routes = require('./routes/api');
var url = require('./webpack-config/base/url.config.js');
const path = require('path');

webpackServer(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/', routes);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
app.all('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, './','index.html'));
});

app.all('/:page', function(req, res) {
  res.sendFile(path.resolve(__dirname, './','index.html'));
});

app.all('/core|react-component/:page', function(req, res) {
  res.sendFile(path.resolve(__dirname, './','index.html'));
});

app.all('/core|react-component/core|react-component/:page', function(req, res) {
  res.sendFile(path.resolve(__dirname, './','index.html'));
});

app.listen(url.mockServer.port, function () {
  console.log('The app listening on port 3000 was started!');
});
