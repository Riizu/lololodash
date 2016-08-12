// include the Lo-Dash library
var _ = require("lodash");

var filter = function(collection) {
// do work; return stuff
   return _.filter(collection, {active: true});
};

// export the worker function as a nodejs module
module.exports = filter;