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

// check node_env, if not set default to development
var env = (process.env.NODE_ENV || "development");
// load config
var config = require("./config/config")[env];

// set Nunjucks as rendering engine for pages with .html suffix
nunjucks.configure("./views", {
    autoescape: true,
    express: app
}) ;
app.engine("html", nunjucks.render) ;
app.set("view engine", "html") ;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev")); // "dev" format of logger prints color coded strings to console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "public")));

module.exports.router = express.Router();

// map route definitions to controller methods
// NOTE: this must be setup before app.listen happens!
// first, import the route definitions from each route.js file
var homeRoutes = require("./routes/homeRoutes.js");
var accountRoutes = require("./routes/accountRoutes.js");
var feedRoutes = require("./routes/feedRoutes.js");
// then, connect the imported routes to the URLs
app.use("/", homeRoutes);
app.use("/account", accountRoutes);
app.use("/feed", feedRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers
if (app.settings.env === "development") {
  // development error handler, will print stacktrace
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}
else {
// production error handler, no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: {}
    });
  });
}

// start the server
app.listen(config.EnvConfig.port, function(){
  console.log("Express server listening on port %d in %s mode", config.EnvConfig.port, app.settings.env);
});
