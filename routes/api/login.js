const router = require("express").Router();
const jwt = require("jsonwebtoken");
const loginController = require("../../controllers/tokenController");
const bcrypt = require("bcrypt");
const db = require("../../models");

router.route("/").post((req, res) => {
  const { email, password } = req.body;
  res.json({
    email: email,
    password: password
  });
  db.User.findOne({ email: email }).then(user => {
    console.log(user.password, "user");
        console.log(password, "input")
        bcrypt.compare(password, user.password).then(match => {
          console.log(match);
        });
  });
});

module.exports = router;
