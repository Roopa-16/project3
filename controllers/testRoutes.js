const db = require("../models");


module.exports = function(app) {

    app.post("/api/userC", function(req, res) {
        db.User.create(req.body).then((userData) => {
            res.json(userData);
        }).catch((err) => {
            console.log(err);
            // res.text(req.err);
        })
      });


  app.get("/api/users", function(req, res) {
    db.User.find({}).then((userData) => {
        res.json(userData);
    }).catch((err) => {
        if (err) throw err;
    })

  });

};
