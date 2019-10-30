const router = require("express").Router();
const jwt = require("jsonwebtoken");
const loginController = require("../../controllers/tokenController");

router
  .route("/").post(loginController.verifyToken, (req, res) => {
  let user = {
    email: req.body.email,
    username: req.body.username
  };
  jwt.sign({ user }, "secretkey", (err, token) => {
    res.json({
      token
    });
  });
});

module.exports = router;
