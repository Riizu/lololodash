var _ = require("lodash");

var sortBy = function(collection) {
    return _.sortBy(collection, function(item) {
        return Math.sin(item.quantity);
    });
};

module.exports = sortBy