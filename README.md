Get Parameter [![npm version](https://badge.fury.io/js/get-parameter.svg)](http://badge.fury.io/js/get-parameter) [![Build Status](https://travis-ci.org/ryanburgess/get-parameter.svg?branch=master)](https://travis-ci.org/ryanburgess/get-parameter)
======

Get Parameter is a simple JavaScript module that returns query string values in JavaScript.

## Install

```js
npm install get-parameter --save-dev
```

## Use

```js
var getParameter = require('get-parameter');

var productId = getParameter('id');
console.log(productId);

// return all get queries
var getParams = getParameter();
// result example:
/* {
  "id":"2",
  "redirect":"true"
} */
```

## Release History
* 1.0.7: Add support for IE8 and below. [Issue #3](https://github.com/ryanburgess/get-parameter/pull/3)
* 1.0.6: Add tests.
* 1.0.5: Add 'use strict' and gitignore.
* 1.0.4: Add gruntfile.
* 1.0.3: Return all get queries.
* 1.0.2: Move repo.
* 1.0.1: Small update.
* 1.0.0: Initial release.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)