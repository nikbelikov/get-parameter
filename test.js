'use strict';
var test = require('tape');
var getParameter = require('./');

test('Make sure getParameter exists', function (t) {
  t.assert(getParameter !== undefined);
  t.end();
});