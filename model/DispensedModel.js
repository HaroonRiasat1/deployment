const mongoose = require("mongoose");

const dispensedSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  dosages: [String],
});

const Dispensed = mongoose.model("Dispensed", dispensedSchema);

module.exports = Dispensed;
