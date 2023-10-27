const express = require("express");
const router = express.Router();

const Treatment = require("../model/treatment_model");

// Create a new treatment entry
router.post("/treatment", async (req, res) => {
  try {
    const newOrdered = new Treatment(req.body);
    const savedOrdered = await newOrdered.save();
    res.status(201).json(savedOrdered);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all treatment entries
router.get("/treatments", async (req, res) => {
  try {
    const orderedEntries = await Treatment.find();
    res.status(200).json(orderedEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific treatment entry by ID
router.get("/treatment/:id", async (req, res) => {
  try {
    const orderedEntry = await Treatment.findById(req.params.id);
    if (!orderedEntry) {
      return res.status(404).json({ error: "treatment entry not found" });
    }
    res.status(200).json(orderedEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific treatment entry by ID
router.put("/treatment/:id", async (req, res) => {
  try {
    const updatedOrdered = await Treatment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOrdered) {
      return res.status(404).json({ error: "treatment entry not found" });
    }
    res.status(200).json(updatedOrdered);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific treatment entry by ID
router.delete("/treatment/:id", async (req, res) => {
  try {
    const deletedOrdered = await Treatment.findByIdAndRemove(req.params.id);
    if (!deletedOrdered) {
      return res.status(404).json({ error: "treatment entry not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all treatment entries for today's date
router.get("/treatments/today", async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const treatmentsForToday = await Treatment.find({
      date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    res.status(200).json(treatmentsForToday);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/treatment/patient/:patientId", async (req, res) => {
  const patientId = req.params.patientId;

  try {
    const treatments = await Treatment.find({ PatientId: patientId });

    if (treatments.length === 0) {
      return res.status(404).json({
        message: "Treatments not found for the specified patient ID.",
      });
    }

    res.status(200).json(treatments);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching treatments",
      error: error.message,
    });
  }
});

module.exports = router;
