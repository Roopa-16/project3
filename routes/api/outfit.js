const router = require("express").Router();
const outfitController = require("../../controllers/outfitController");
const userController = require("../../controllers/userController");

// Matches with "/api/outfits"

router.route("/").get(outfitController.findAll);
// id for post route is user
router.route("/:id").post(outfitController.create);
// id for get route is outfit id
router.route("/:id").get(outfitController.findById);
// to get outfits associated with user, have to use userController
router.route("/user/:id").get(userController.findById);

router.route("/").delete(outfitController.removeAll);
router.route("/:id").delete(outfitController.removeAllFromUser);

module.exports = router;
