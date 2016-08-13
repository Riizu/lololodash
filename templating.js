var _ = require("lodash");

var templating = function(input) {
    var template = "Hello <%= name %> (logins: <%= login.length %>)";

    return _.template(template)(input);
};

module.exports = templating;