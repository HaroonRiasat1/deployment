const express = require("express");
const router = express.Router();
const Ordered = require("../model/orderedModel"); // Import the "Ordered" model
const Treatment = require("../model/treatment_model");

// Get all ordered entries for today's date
router.get("/ordered/today", async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const orderedForToday = await Ordered.find({
      date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    res.status(200).json(orderedForToday);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new ordered entry
router.post("/ordered", async (req, res) => {
  try {
    const newOrdered = new Ordered(req.body);
    const savedOrdered = await newOrdered.save();
    res.status(201).json(savedOrdered);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all ordered entries
router.get("/ordered", async (req, res) => {
  try {
    const orderedEntries = await Ordered.find();
    res.status(200).json(orderedEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific ordered entry by ID
router.get("/ordered/:id", async (req, res) => {
  try {
    const orderedEntry = await Ordered.findById(req.params.id);
    if (!orderedEntry) {
      return res.status(404).json({ error: "Ordered entry not found" });
    }
    res.status(200).json(orderedEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific ordered entry by ID
router.put("/ordered/:id", async (req, res) => {
  try {
    const updatedOrdered = await Ordered.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOrdered) {
      return res.status(404).json({ error: "Ordered entry not found" });
    }
    res.status(200).json(updatedOrdered);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific ordered entry by ID
router.delete("/ordered/:id", async (req, res) => {
  try {
    const deletedOrdered = await Ordered.findByIdAndRemove(req.params.id);
    if (!deletedOrdered) {
      return res.status(404).json({ error: "Ordered entry not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Get all ordered entries by PatientId
// Get all ordered entries by PatientId
router.get("/ordered/patient/:patientId", async (req, res) => {
  const patientId = req.params.patientId;
  try {
    const orderedEntries = await Ordered.find({ PatientId: patientId });
    res.status(200).json(orderedEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Other routes...

router.get("/ordered/search", async (req, res) => {
  const { patientId } = req.query;

  try {
    const orderedData = await Ordered.find({ PatientId: patientId });

    if (orderedData.length === 0) {
      return res.status(404).json({
        message: "Ordered data not found for the specified PatientId.",
      });
    }

    res.status(200).json(orderedData);
  } catch (error) {
    res.status(500).json({
      message: "Error searching for Ordered data",
      error: error.message,
    });
  }
});

router.get("/patient/:patientId", async (req, res) => {
  const patientId = req.params.patientId;

  try {
    const [treatments, orderedEntries] = await Promise.all([
      Treatment.find({ PatientId: patientId }).sort({ date: 1 }),
      Ordered.find({ PatientId: patientId }).sort({ date: 1 }),
    ]);

    if (treatments.length === 0 && orderedEntries.length === 0) {
      return res.status(404).json({
        message:
          "No treatments or ordered entries found for the specified patient ID.",
      });
    }

    res.status(200).json({
      orderedEntries,
      treatments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching treatments and ordered entries",
      error: error.message,
    });
  }
});
module.exports = router;
