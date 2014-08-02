'use strict';

var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('docs', {'index': 'index-jsgen.html'});

// Create server
http.createServer(function (req, res) {
  serve(req, res, finalhandler(req, res));
}).listen(4000);
console.log('Listen: 4000');