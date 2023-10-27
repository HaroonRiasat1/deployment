const mongoose = require("mongoose");

const orderedSchema = new mongoose.Schema({
  type: String,
  date: Date, // Consider using Date data type for date
  room: String,
  PatientId: String,
  orderID: String,
  note: String,
  vitals: {
    HR: Number,
    BP: String,
    T: Number,
    W: Number,
  },
  vitaminD: {
    dose: String,
    note: String,
  },
  redLightBed: Boolean,
  hydrogenIV: {
    dosage: String, // An array of strings
  },
  hydrogenIn: Boolean,
  glutathione: {
    checked: Boolean,
    note: String,
  },
  HOT: {
    checked: Boolean,
    note: String,
  },
  ALA: Boolean,
  CaEDTA: {
    checked: Boolean,
    note: String,
  },
  artemisinin: Boolean,
  IVVitaminC: {
    checked: Boolean,
    note: String,
  },
  hydrogenPeroxide: Boolean,
  IVNutraPeroxide: Boolean,
  IVNutrionalTherapy: Boolean,
  MIC: Boolean,
  inositol: Boolean,
  PTC: {
    checked: Boolean,
    note: String,
  },
  selenomethionine: Boolean,
  sodiumSelenite: Boolean,
  aminoAcidEssentials: Boolean,
  sodiumBicarbonate: {
    checked: Boolean,
    note: String,
  },
  chelodonium: Boolean,
  germanium: Boolean,
  amygdalin: Boolean,
  helixor: Boolean,
  curcumin: {
    checked: Boolean,
    note: String,
  },
  resveratrol: {
    checked: Boolean,
    note: String,
  },
  quercetin: {
    checked: Boolean,
    note: String,
  },
  silymarin: Boolean,
  bilberryExtract: Boolean,
  EGCG: Boolean,
  NAD: Boolean,
  zinc: Boolean,
  echinacheaFE: Boolean,
  DRibose: Boolean,
  glutamine: Boolean,
  LLysine: Boolean,
  DCA: Boolean,
  lipoicP: Boolean,
  ondamed: Boolean,
  STEMCells: Boolean,
  proloInjection: Boolean,
  labs: {
    note: String,
  },
  Sermorelin: {
    quantity: Number,
    dosage: String,
    note: String,
  },
  Testosterone: {
    quantity: Number,
    dosage: String,
    note: String,
  },
  HCGInjection: {
    quantity: Number,
    dosage: String,
    note: String,
  },
  InjectableMistletoe: {
    quantity: Number,
    dosage: String,
    note: String,
  },
});

const Ordered = mongoose.model("Ordered", orderedSchema);

module.exports = Ordered;
