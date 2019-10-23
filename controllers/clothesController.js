const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAllClothes: function(req, res) {
    db.Clothes.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllShoes: function(req, res) {
    db.Shoes.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTops: function(req, res) {
    db.Tops.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllBottoms: function(req, res) {
    db.Bottoms.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllOuterwear: function(req, res) {
    db.Outerwear.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
