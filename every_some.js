var _ = require("lodash");

var every_some = function(collection) {
    var towns = {
        hot: [],
        warm: []
    };
    
    function hotEnough(temp) {
        return temp > 19;
    }

     _.forEach(collection, function(town, name) {
        if(_.every(town, hotEnough)) {
            towns.hot.push(name);
        } else if(_.some(town, hotEnough)) {
            towns.warm.push(name);
        }
    });

    return towns;
}

module.exports = every_some;