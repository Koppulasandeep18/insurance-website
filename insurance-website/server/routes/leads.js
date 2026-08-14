const express = require("express");
const router = express.Router();

const Lead = require("../models/Lead");

// CREATE LEAD
router.post("/", async (req, res) => {
  try {
    const { name, mobile, service } = req.body;

    if (!name || !mobile || !service) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newLead = new Lead({
      name,
      mobile,
      service,
    });

    const savedLead = await newLead.save();

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      lead: savedLead,
    });
  } catch (error) {
    console.error("Create Lead Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create lead",
    });
  }
});

// GET ALL LEADS
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      leads: leads,
    });
  } catch (error) {
    console.error("Get Leads Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch leads",
    });
  }
});

// UPDATE LEAD STATUS
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedLead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      lead: updatedLead,
    });
  } catch (error) {
    console.error("Update Lead Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update lead",
    });
  }
});

module.exports = router;