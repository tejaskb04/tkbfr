// account controller methods

exports.login = function(req, res, next) {
  res.render("./account/login", { title: "Login Page" });
};

exports.register = function(req, res, next) {
  res.render("./account/register", { title: "Register Page" });
};
