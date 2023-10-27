const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer_id: { type: String, required: true },
  order_id: { type: String, required: true },
  date: { type: Date, default: Date.now },
  vitals: { type: String },
  procedures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Procedure" }],
  dispensed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dispensed" }],
  labs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lab" }],
  room: { type: String },
  note: { type: String },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
