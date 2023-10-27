const mongoose = require("mongoose");

const procedureSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  procedure_name: String,
  dosages: [String],
});

const Procedure = mongoose.model("Procedure", procedureSchema);

module.exports = Procedure;
