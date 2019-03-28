// getParameter
//
// Use: Returns query string values in JavaScript
//
// var productId = getParameter('id');
//
// Returns: value
// ------------------------------------------------------------

const windowIsDefined = function () {
  return typeof window !== 'undefined';
};

module.exports = function getParameter(name){
  'use strict';
  const queryDict = {};
  const queries = windowIsDefined() ? window.location.search.substr(1).split('&') : [];

  for (let i = 0; i < queries.length; i += 1) {
    queryDict[queries[i].split('=')[0]] = decodeURIComponent(queries[i].split('=')[1]);
  }

  if (name) {
    return Object.prototype.hasOwnProperty.call(queryDict, name)
      ? decodeURIComponent(queryDict[name].replace(/\+/g, ' '))
      : '';
  }

  return queryDict;
};
