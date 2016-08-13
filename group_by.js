var _ = require("lodash");

var groupBy = function(collection) {
    var commentCounts = [];
    var groups = _.groupBy(collection, 'username');

    _.forEach(groups, function(group, name) {
        commentCounts.push({
            username: name,
            comment_count: _.size(group)
        });
    });

    return _.sortBy(commentCounts, function(total) {
        return -total.comment_count;
    });
};

module.exports = groupBy;