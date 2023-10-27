const mongoose = require("mongoose");

const labSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  lab_name: String,
});

const Lab = mongoose.model("Labs", labSchema);

module.exports = Lab;
