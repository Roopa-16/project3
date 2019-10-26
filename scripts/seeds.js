const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/styleFish"
);

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
    color: "orange",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "orange",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "yellow",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "yellow",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "purple",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "purple",
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
  },
  {
    type: "hoodie",
    color: "brown",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "brown",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "white",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "hoodie",
    color: "black",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "blank",
    opacity: "blank",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "red",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "red",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "orange",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "orange",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "yellow",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "yellow",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "purple",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "purple",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "blue",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "blue",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "green",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "green",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "brown",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "brown",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "white",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jacket",
    color: "black",
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
    color: "orange",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "orange",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "yellow",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "yellow",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "purple",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "purple",
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
  },
  {
    type: "short-sleeve",
    color: "brown",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "brown",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "white",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "short-sleeve",
    color: "black",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "blank",
    opacity: "blank",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "red",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "red",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "orange",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "orange",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "yellow",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "yellow",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "purple",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "purple",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "blue",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "blue",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "green",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "green",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "brown",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "brown",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "white",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "long-sleeve",
    color: "black",
    opacity: "dark",
    imageURL: ""
  }
];

const bottoms = [
  {
    type: "jeans",
    color: "blank",
    opacity: "blank",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "red",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "red",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "orange",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "orange",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "yellow",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "yellow",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "purple",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "purple",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "blue",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "blue",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "green",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "green",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "brown",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "brown",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "white",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "jeans",
    color: "black",
    opacity: "dark",
    imageURL: ""
  },
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
    color: "orange",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "orange",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "yellow",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "yellow",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "purple",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "purple",
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
  },
  {
    type: "joggers",
    color: "brown",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "brown",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "white",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "joggers",
    color: "black",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "blank",
    opacity: "blank",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "red",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "red",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "orange",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "orange",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "yellow",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "yellow",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "purple",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "purple",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "blue",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "blue",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "green",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "green",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "brown",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "brown",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "white",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "shorts",
    color: "black",
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
    color: "orange",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "orange",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "yellow",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "yellow",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "purple",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "purple",
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
  },
  {
    type: "sneakers",
    color: "brown",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "brown",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "white",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "sneakers",
    color: "black",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "blank",
    opacity: "blank",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "red",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "red",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "orange",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "orange",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "yellow",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "yellow",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "purple",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "purple",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "blue",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "blue",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "green",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "green",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "brown",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "brown",
    opacity: "dark",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "white",
    opacity: "light",
    imageURL: ""
  },
  {
    type: "slip-ons",
    color: "black",
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
