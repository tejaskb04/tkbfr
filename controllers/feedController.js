// define routes for feed controller methods
var express = require("express");
var app = express;

exports.read = function(req, res, next) {
  res.render("./feed/read", { title: "Read Page" });
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

