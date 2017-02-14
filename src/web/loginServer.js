var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var app = express();
var server = http.createServer();
app.use(bodyParser.json());
app.get("/login", function(req, res) {
    res.sendFile("C:/tejas/src/tkbfr/src/web/login.html");
});
app.post("/login", function(req, res) {
    console.log("dfksfjljsdklfjsdfjsklfjsjkj"); 
    console.log(req.body);
    /* Compare data with database */
});
app.listen(8080);