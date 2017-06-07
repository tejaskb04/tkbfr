// define routes for home controller methods

var router = module.parent.exports.router;

// require the controllers
var homeController = require("../controllers/homeController");

// define routes

// get home page
router.get("/", homeController.index);

module.exports = router;
