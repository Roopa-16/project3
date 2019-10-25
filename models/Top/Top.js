var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var TopSchema = new Schema({
  // `title` is required and of type String
  type: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  color: {
    type: String,
    required: true
  },

  opacity: {
    type: String,
    required: true
  },

  imageURL: {
    type: String,
    required: false,
    default: "client/src/Views/assets/2.png"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Top = mongoose.model("Top", TopSchema);

// Export the Article model
module.exports = Top;
