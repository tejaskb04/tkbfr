// load express and other modules
var express = require("express");
var nunjucks  = require("nunjucks");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

// set express to app
var app = express();

// set Nunjucks as rendering engine for pages with .html suffix
var PATH_TO_TEMPLATES = "./views";
nunjucks.configure( PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
}) ;
app.engine("html", nunjucks.render) ;
app.set("view engine", "html") ;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routing - load router modules from routes directory, then mount them on to a path
var loginPage = require("./routes/login");
app.use(loginPage);
var registerPage = require("./routes/register");
app.use(registerPage);
var homePage = require("./routes/index");
app.use(homePage);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

app.listen(8080);
console.log("Running on port 8080");
