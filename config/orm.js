// Import MySQL connection.
var connection = require("./connection.js");

// select = GET
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    // insert = POST
    insertOne: function (tableInput, burgerName, devouredStatus, cb) {
        var queryString = 'INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)';
        connection.query(queryString, [tableInput, burgerName, devouredStatus], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result)
        });
    },
    // update = PUT
    updateOne: function (tableInput, devouredStatus, burgerId, cb) {
        var queryString = 'UPDATE ?? SET DEVOURED = ? WHERE ID = ?';
        connection.query(queryString, [tableInput, devouredStatus, burgerId], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result)
        });
    },
};

module.exports = orm;