var _ = require("lodash");

var chaining = function(collection) {
    return _.chain(collection)
    .map(function(word) {
        return word.toUpperCase() + "CHAINED";
    })
    .sortBy();
};

module.exports = chaining;