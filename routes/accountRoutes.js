// define routes for account controller methods

var router = module.parent.exports.router;

// require the controllers
var accountController = require("../controllers/accountController");

// get login
router.get("/login", accountController.login);

// get register
router.get("/register", accountController.register);

module.exports = router;
