var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var OutfitSchema = new Schema({
  // `title` is required and of type String
  type: {
    type: String,
    required: true
  },
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  top: [{
    type: Schema.Types.ObjectId,
    ref: "Top"
  }],
  bottom: [{
    type: Schema.Types.ObjectId,
    ref: "Bottom"
  }],
  shoe: [{
    type: Schema.Types.ObjectId,
    ref: "Shoe"
  }],
  outerwear: [{
    type: Schema.Types.ObjectId,
    ref: "Outerwear"
  }]
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
});

// This creates our model from the above schema, using mongoose's model method
var Outfit = mongoose.model("Outfit", OutfitSchema);

// Export the Article model
module.exports = Outfit;