const express = require("express");
const router = express.Router();
const PatientProfile = require("../model/PatientProfileModel"); // Import the PatientProfile model

// Create a new patient profile
router.post("/patient-profiles", async (req, res) => {
  try {
    const newProfile = new PatientProfile(req.body);
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
//all active patients
router.get("/patient-profiles/active", async (req, res) => {
  try {
    const activeProfiles = await PatientProfile.find({ Status: "Active" });
    res.status(200).json(activeProfiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all patient profiles
router.get("/patient-profiles", async (req, res) => {
  try {
    const profiles = await PatientProfile.find();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific patient profile by ID
router.get("/patient-profiles/:id", async (req, res) => {
  try {
    const profile = await PatientProfile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific patient profile by ID
router.put("/patient-profiles/:id", async (req, res) => {
  try {
    const updatedProfile = await PatientProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.status(200).json(updatedProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific patient profile by ID
router.delete("/patient-profiles/:id", async (req, res) => {
  try {
    const deletedProfile = await PatientProfile.findByIdAndRemove(
      req.params.id
    );
    if (!deletedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
