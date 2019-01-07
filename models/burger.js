var orm = require('../config/orm.js');

var burgers = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    insertOne: function(tableInput, burgerName, devouredStatus, cb){
        orm.insertOne(tableInput, burgerName, devouredStatus, function(res){
            cb(res);
        });
    },
    updateOne: function(tableInput, devouredStatus, burgerId, cb){
        orm.updateOne(tableInput, devouredStatus, burgerId, function(res){
            cb(res)
        });
    }
};




module.exports = burgers;