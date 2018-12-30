var burger = require('../models/burger.js');
var express = require("express");
var app = express();


app.get('/', function(req, res){
    burger.selectAll()
})

