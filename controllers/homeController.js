// home controller methods

exports.index = function(req, res, next) {
  res.render("./home/index", { title: "Home Page" });
};
