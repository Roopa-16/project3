const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/styleFish");

const outerwear = [
  {
    type: "hoodie",
    color: "blank",
    opacity: "blank",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "red",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "red",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "blue",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "blue",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "green",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "green",
    opacity: "dark",
    imageURL: ""
  }
];

const tops = [
  {
    type: "short-sleeve",
    color: "blank",
    opacity: "blank",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "red",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "red",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "blue",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "blue",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "green",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "green",
    opacity: "dark",
    imageURL: ""
  }
];

const bottoms = [
  {
    type: "joggers",
    color: "blank",
    opacity: "blank",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "red",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "red",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "blue",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "blue",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "green",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "green",
    opacity: "dark",
    imageURL: ""
  }
];

const shoes = [
  {
    type: "sneakers",
    color: "blank",
    opacity: "blank",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "red",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "red",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "blue",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "blue",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "green",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "green",
    opacity: "dark",
    imageURL: ""
  }
];

db.Outerwear.remove({})
  .then(() => db.Outerwear.insertMany(outerwear))
  .then(data => {
    console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Top.remove({})
  .then(() => db.Top.insertMany(tops))
  .then(data => {
    console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Bottom.remove({})
  .then(() => db.Bottom.insertMany(bottoms))
  .then(data => {
    console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Shoe.remove({})
  .then(() => db.Shoe.insertMany(shoes))
  .then(data => {
    console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
