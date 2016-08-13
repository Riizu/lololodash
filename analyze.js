var _ = require("lodash");

var analyze = function(collection) {
    var average, underperform, overperform;

    average = _.reduce(collection, function(sum, item) {
        return sum + item.income;
    }, 0) / _.size(collection);

    underperform = _.filter(collection, function(item) {
        return item.income <= average;
    });

    overperform = _.filter(collection, function(item) {
        return item.income > average;
    });

    underperform = _.sortBy(underperform, 'income');
    overperform = _.sortBy(overperform, 'income');

    return {
        average: average,
        underperform: underperform,
        overperform: overperform
    };
};

module.exports = analyze;