const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/").get(userController.findAll);

// Find user by Id and update their outfit
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.findByIdAndUpdate)
  .delete(userController.remove);

module.exports = router;
