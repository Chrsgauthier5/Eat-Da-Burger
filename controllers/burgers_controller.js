
var express = require("express");

var router = express.Router();

var burgers = require('../models/burger.js');

router.get("/", function(req, res) {

    burgers.selectAll(function (data) {
        
        console.log({burgers: data});
        res.render("index", {burgers: data});
    });

});


module.exports = router;