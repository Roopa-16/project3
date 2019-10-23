const router = require("express").Router();
const clothesController = require("../../controllers/clothesController");

// Matches with "/api/clothes"
router.route("/").get(clothesController.findAllClothes);
router.route("/shoes").get(clothesController.findAllShoes);
router.route("/tops").get(clothesController.findAllTops);
router.route("/bottoms").get(clothesController.findAllBottoms);
router.route("/outerwear").get(clothesController.findAllOuterwear);

module.exports = router;
