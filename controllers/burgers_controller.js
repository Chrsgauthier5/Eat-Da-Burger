
var express = require("express");

var router = express.Router();

var burgers = require('../models/burger.js');

router.get("/", function (req, res) {

    burgers.selectAll(function (data) {

        console.log({ burgers: data });
        res.render("index", { burgers: data });
    });

});

router.post("/", function (req, res) {

    console.log(req.body);
    burgers.insertOne(req.body.table, req.body.newBurger, req.body.devoured, 
        function (result) {
            console.log(result);
            if (result.affectedRows == 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });

});

router.put('/', function (req, res) {
    console.log(req.body);
    burgers.updateOne(
        req.body.table, req.body.devoured, req.body.id,
        function (result) {
            console.log(result);
            if (result.affectedRows == 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
});



module.exports = router;