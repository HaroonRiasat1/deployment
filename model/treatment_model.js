const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema({
  type: String,
  date: Date, // Consider using Date data type for date
  room: String,
  PatientId: String,
  treatmentID: String,
  note: String,
  vitals: {
    HR: Number,
    BP: String,
    T: Number,
    W: Number,
  },
  vitaminD: {
    checked: Boolean,
    note: String,
  },
  redLightBed: Boolean,
  hydrogenIV: {
    checked: Boolean,
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
    checked: Boolean,
    note: String,
  },
  Testosterone: {
    checked: Boolean,
    note: String,
  },
  HCGInjection: {
    checked: Boolean,
    note: String,
  },
  InjectableMistletoe: {
    checked: Boolean,
    note: String,
  },
});

const Treatment = mongoose.model("Treatment", treatmentSchema);

module.exports = Treatment;
