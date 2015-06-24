var test = require('tape');
var getParameter = require('./');

test('Make sure getParameter exists', function (t) {
  'use strict';
  t.assert(getParameter !== undefined);
  t.end();
});