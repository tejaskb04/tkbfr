// account controller methods

exports.login = function(req, res, next) {
  res.render("login", { title: "Login Page" });
};

exports.register = function(req, res, next) {
  res.render("register", { title: "Register Page" });
};
