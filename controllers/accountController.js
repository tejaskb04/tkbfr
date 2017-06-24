// account controller actions
var qs = require("querystring");

exports.login = function (req, res, next) {
	res.render("./account/login", { title: "Login Page" });
};

exports.loginData = function(req, res, next) {
	if (req.method == "POST") {
		var body = "";
		req.on("data", function(data) {
			body += data;
		});
		req.on("end", function() {
			var POST = qs.parse(body);
			// do stuff
		});
	}
}

exports.register = function (req, res, next) {
	res.render("./account/register", { title: "Register Page" });
};

exports.registerData = function(req, res, next) {
	if (req.method == "POST") {
		var body = "";
		req.on("data", function(data) {
			body += data;
		});
		req.on("end", function() {
			var POST = qs.parse(body);
			// do stuff
		});
	}
}