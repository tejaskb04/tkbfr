// define routes for feed controller methods

var router = module.parent.exports.router;

// require the controllers
var feedController = require("../controllers/feedController");

router.get("/read", feedController.read);

router.get("/list", feedController.list);

module.exports = router;
