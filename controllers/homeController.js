// home controller methods

exports.index = function(req, res, next) {
  res.render("index", { title: "Home Page" });
};
