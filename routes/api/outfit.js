const router = require("express").Router();
const outfitController = require("../../controllers/outfitController");

// Matches with "/api/outfits"

router.route("/").get(outfitController.findAll);
router.route("/:id").post(outfitController.create);

router.route("/").delete(outfitController.removeAll);

module.exports = router;
