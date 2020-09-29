const db = require("../models");

// Defining methods for the villainsController
module.exports = {
  findAll: function (req, res) {
    db.Villains.find(req.query).then((dbModel) => res.json(dbModel));
  },
  randomizeOne: function (req, res) {
    db.Villains.aggregate([
      {
        $sample: { size: 1 },
      },
    ]);
  },
};
