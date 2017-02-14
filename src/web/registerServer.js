var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var app = express();
var server = http.createServer();
app.use(bodyParser.json());
app.get("/register", function(req, res) {
    res.sendFile("C:/tejas/src/tkbfr/src/web/register.html");
});
app.post("/register", function(req, res) {
    /* Add data to database */
});
app.listen(8080);