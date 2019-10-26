const db = require("../models");

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
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.find({
      email: req.body.email
    }).then(function(emailModel){

      if(emailModel.length === 0){

        db.User.find({
          username: req.body.username
        }).then(function(usernameModel){
          if(usernameModel.length === 0){
            db.User.create(req.body)
            .then(dbModel => res.json({
              message: "Welcome to Stylefish. Time to log in " + dbModel.username + "!"
            }))
            .catch(err => res.status(422).json(err));
          } else {
            res.json({
              message: "This username is already taken."
            })
          }
        }).catch(err => res.status(422).json(err));

      } else {
        res.json({
          message: "This email is already taken."
        })
      }
    
    }).catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
