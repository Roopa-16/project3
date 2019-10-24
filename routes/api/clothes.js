const router = require("express").Router();
const clothesController = require("../../controllers/clothesController");

// Matches with "/api/clothes"

// get routes

// router.route("/").get(clothesController.findAllClothes);

router.route("/shoes").get(clothesController.findAllShoes);
router.route("/tops").get(clothesController.findAllTops);
router.route("/bottoms").get(clothesController.findAllBottoms);
router.route("/outerwear").get(clothesController.findAllOuterwear);

router.route("/colors").get(clothesController.findAllColors);

// post routes
router.route("/shoes").post(clothesController.createShoes);
router.route("/tops").post(clothesController.createTops);
router.route("/bottoms").post(clothesController.createBottoms);
router.route("/outerwear").post(clothesController.createOuterwear);

router.route("/colors").post(clothesController.createColor);

module.exports = router;
