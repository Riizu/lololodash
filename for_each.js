var _ = require("lodash");

var forEach = function(collection) {
    return _.forEach(collection, addSize);
};

function addSize(item) {
    if (item.population > 1) {
        item.size = "big";
    } else if (item.population > 0.5) {
        item.size = "med";
    } else {
        item.size = "small";
    }
}

module.exports = forEach;