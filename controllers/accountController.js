// account controller actions

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
			//var post = qs.parse(body);
			//console.log(post.email);
			//console.log(post.password);
			console.log(JSON.parse(body));
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