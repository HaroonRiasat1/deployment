const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema({
  treatment_id: { type: String, required: true },
  date: { type: Date, default: Date.now },
  vitals: { type: String },
  procedures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Procedure" }],
  dispensed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dispensed" }],
  labs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lab" }],
  room: { type: String },
  note: { type: String },
  customer_id: { type: String, required: true },
});

const Treatment = mongoose.model("Treatment", treatmentSchema);

module.exports = Treatment;
