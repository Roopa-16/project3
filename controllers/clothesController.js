const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAllClothes: function(req, res) {
  //   db.Clothes.find(req.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findAllShoes: function(req, res) {
    db.Shoe.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTops: function(req, res) {
    db.Top.find(req.query)
      .populate("color")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllBottoms: function(req, res) {
    db.Bottom.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllOuterwear: function(req, res) {
    db.Outerwear.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllColors: function(req, res) {
    db.Color.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createShoes: function(req, res) {
    db.Shoe.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTops: function(req, res) {
    db.Top.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createBottoms: function(req, res) {
    db.Bottom.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createOuterwear: function(req, res) {
    db.Outerwear.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createColor: function(req, res) {
    db.Color.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
