'use strict';

var Toa = require('toa');
var toaStatic = require('toa-static')({
  root: 'docs',
  index: 'index-jsgen.html',
  maxAge: 1000 * 60 * 60 * 24 * 30,
  staticPath: function () {
    if (this.path.indexOf('/api') === 0) return '/';
  }
});

Toa(function* (Thunk) {
  yield toaStatic;
}).listen(3001);
