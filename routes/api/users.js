const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Find user by Id and update their outfit
router
  .route("/:id")
  .get(userController.findById)
  .create(userController.create)
  .put(userController.findOneAndUpdate)
  .delete(userController.remove);

module.exports = router;
