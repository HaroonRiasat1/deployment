const mongoose = require("mongoose");

const patientProfileSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  "Customer ID": String,
  "Full Name": String,
  "First Name": String,
  "Last Name": String,
  Email: String,
  Address1: String,
  Address2: String,
  City: String,
  Province: String,
  "Province Code": String,
  Country: String,
  "Country Code": String,
  Zip: String,
  Phone: String,
  Note: String,
  Status: String,
});

const PatientProfile = mongoose.model(
  "PatientProfile",
  patientProfileSchema,
  "Patient Profiles"
);

module.exports = PatientProfile;
