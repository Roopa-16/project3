const router = require("express").Router();
const clothesRoutes = require("./clothes");
const userRoutes = require("./users");
const outfitRoutes = require("./outfit");

// Book routes
router.use("/clothes", clothesRoutes);
router.use("/users", userRoutes);
router.use("/outfits", outfitRoutes);

module.exports = router;
