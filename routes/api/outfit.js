const router = require("express").Router();
const outfitController = require("../../controllers/outfitController");

// Matches with "/api/clothes"

router.route("/").get(outfitController.findAll);
router.route("/:id").post(outfitController.create);



module.exports = router;