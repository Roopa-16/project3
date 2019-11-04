const axios = require("axios");
const db = require("../models");

// socket methods
module.exports = {
  getClosetFeed: async (socket, port) => {
    try {
      const res = await axios.get(`/api/outfits`, {
        proxy: {
          // host: "127.0.0.1",
          port: port
        }
      });
      let array = res.data;

      let newOutfit = array[array.length - 1];
      if (!newOutfit) {
        return;
      } else {
        socket.emit("closetFeed", newOutfit);
      }
    } catch (error) {
      console.log(`Error is ${error.message} error id is ${error.id}`);
    }
  },
  getMongoClosetFeed: function(req, res) {
    db.ClosetFeed.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  pushToMongoClosetFeed: function(req, res) {
    db.ClosetFeed.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  }
};
