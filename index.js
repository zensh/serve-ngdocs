'use strict';

var Toa = require('toa');
var toaStatic = require('toa-static')({
  root: 'docs',
  index: 'index-jsgen.html',
  maxAge: 1000 * 60 * 60 * 24 * 365,
  setStatic: function () {
    if (this.path.indexOf('/api') === 0) return '/';
  }
});

Toa(function (Thunk) {
  return toaStatic;
}).listen(4000);
