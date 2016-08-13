var _ = require("lodash");

var reducer = function(collection) {
    var results = [];
    var orders = _.groupBy(collection, 'article');

    _.forEach(orders, function(item, key) {
        var total_orders = _.reduce(item, function(sum, item) {
            return sum + item.quantity;
        }, 0);

        results.push({
            article: parseInt(key),
            total_orders: total_orders
        });
    });

    return _.sortBy(results, 'total_orders').reverse();
};

module.exports = reducer;