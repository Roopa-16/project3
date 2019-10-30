const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .populate("outfits")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .populate("outfits")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.find({
      email: req.body.email
    })
      .then(function(emailModel) {
        if (emailModel.length === 0) {
          db.User.find({
            username: req.body.username
          })
            .then(function(usernameModel) {
              if (usernameModel.length === 0) {
                newUser = {
                  email: req.body.email,
                  username: req.body.username,
                  password: req.body.password
                };
                // Creating salt & hash
                bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    if (hash) {
                      db.User.create(newUser)
                        .then(dbModel =>
                          res.json({
                            message:
                              "Welcome to Stylefish. Time to log in " +
                              dbModel.username +
                              "!",
                            username: dbModel.username,
                            password: dbModel.password
                          })
                        )
                        .catch(err =>
                          res.status(422).json({
                            message:
                              "There was a problem with the database. (Error 422)"
                          })
                        );
                    }
                  });
                });
              } else {
                res.json({
                  message: "This username is already taken."
                });
              }
            })
            .catch(err =>
              res.status(422).json({
                message: "There was a problem with the database. (Error 422)"
              })
            );
        } else {
          res.json({
            message: "This email is already taken."
          });
        }
      })
      .catch(err =>
        res.status(422).json({
          message: "There was a problem with the database. (Error 422)"
        })
      );
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err.message));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
