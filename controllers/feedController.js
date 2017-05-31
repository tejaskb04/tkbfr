// define routes for feed controller methods
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
    res.render("./feed/list", {title: "List Page" });
};

