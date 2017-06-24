// define routes for account controller methods

var router = module.parent.exports.router;

// require the controllers
var accountController = require("../controllers/accountController");

// get login
router.get("/login", accountController.login);
router.post("/login", accountController.loginData);

// get register
router.get("/register", accountController.register);
router.post("/register", accountController.registerData);

module.exports = router;
