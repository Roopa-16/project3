const router = require("express").Router();
const clothesRoutes = require("./clothes");
const userRoutes = require("./users");

// Book routes
router.use("/clothes", clothesRoutes);
router.use("/users", userRoutes);

module.exports = router;
