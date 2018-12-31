// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result)
        });
    },
    insertOne: function (tableInput, burgerName, devouredStatus) {
        var queryString = 'INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)';
        connection.query(queryString, [tableInput, burgerName, devouredStatus], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (tableInput, devouredStatus, burgerName) {
        var queryString = 'UPDATE ?? SET DEVOURED = ? WHERE BURGER_NAME = ?';
        connection.query(queryString, [tableInput, devouredStatus, burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;