const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.Outfit.find(req.query)
    .populate("user")
    .populate("tops")
    .populate("bottom")
    .populate("shoe")
    .populate("outerwear")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Outfit.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // db.Outfit.create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));

      db.Outfit.create(req.body)
      .then(function(dbModel) {
        // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
        // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        console.log(dbModel.id);
        return db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { outfits: dbModel._id } },
          { new: true }
        );
      })
      .then(function(dbArticle) {
      console.log("done");
        // If we were able to successfully update an Article, send it back to the client
        res.json(dbArticle);

      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
    //   });
  });

  },
  update: function(req, res) {
    db.Outfit.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Outfit.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};