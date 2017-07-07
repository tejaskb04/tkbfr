// define routes for feed controller methods

var router = module.parent.exports.router;

// require the controllers
var feedController = require("../controllers/feedController");

// read a feed (the url comes in as a parameter)
router.get("/read/:furl", feedController.read);

// list - provide a list of feeds of the logged in user
router.get("/list", feedController.list);

module.exports = router;
