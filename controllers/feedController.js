// define routes for feed controller methods
var express = require("express");
var feed = require("feed-read");
var app = express;

exports.read = function(req, res, next) {
  //TODO: read the variable that comes as part of url after the /read
  // pass the value of that variable to the read.html
  // display that value inside read.html
  var params = req.params;
  var feedurl = params.feedurl;
  console.log("url: %s", feedurl);
  res.render("./feed/read", { title: "Read Page", url: feedurl});
};

exports.list = function(req, res, next) {

    /* TODO
    - create an object called feedsViewModel
    - create a list of items in this object
    - an item should have a title and a URL
    - these items are the feed information stored by the user
    - for now, hard code the list of items
    - pass in this view model object as the parameter to the list page
    */

    var items = [];
    items.push({title: "BBC Feed", url: "http://feeds.bbci.co.uk/news/rss.xml"});
    items.push({title: "Sky Feed", url: "http://news.sky.com/feeds/rss/home.xml"});
    items.push({title: "Techmeme Feed", url: "http://www.techmeme.com/feed.xml"});
    
    var viewModel = {};
    viewModel.title = "List of Feeds";
    viewModel.items = items;
    res.render("./feed/list", {viewModel: viewModel});
};

