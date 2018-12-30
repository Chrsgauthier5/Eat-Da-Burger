var orm = require('../config/orm.js');

var burgers = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, devouredStatus, cb){
        orm.insertOne('burgers', burgerName, devouredStatus, function(res){
            cb(res);
        });
    },
    updateOne: function(devouredStatus, burgerName, cb){
        orm.updateOne('burgers', devouredStatus, burgerName, function(res){
            cb(res)
        });
    }
};




module.exports = burgers;