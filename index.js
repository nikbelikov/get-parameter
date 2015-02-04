// getParameter
//
// Use: Returns query string values in JavaScript
//
// var productId = getParameter('id');
//
// Returns: value
// ------------------------------------------------------------

module.exports = function getParameter(name){
  'use strict';
  var queryDict = {};
  location.search.substr(1).split('&').forEach(function(item) {queryDict[item.split('=')[0]] = decodeURIComponent(item.split('=')[1])});
  
  // if name specified, return that specific get parameter
  if (name) {
    return queryDict.hasOwnProperty(name) ? decodeURIComponent(queryDict[name].replace(/\+/g, ' ')) : '';
  }

  return queryDict;
}