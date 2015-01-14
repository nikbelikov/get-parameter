// getParameter
//
// Use: Returns query string values in JavaScript
//
// var productId = getParameter('id');
//
// Returns: value
// ------------------------------------------------------------

module.exports = function getParameter(name){
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
      results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}