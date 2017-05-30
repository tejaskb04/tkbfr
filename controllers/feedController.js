// define routes for feed controller methods
exports.read = function(req, res, next) {
  res.render("./feed/read", { title: "Read Page" });
};

exports.list = function(req, res, next) {
    res.render("./feed/list", {title: "List Page" });
};

