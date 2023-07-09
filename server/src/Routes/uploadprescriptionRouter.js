const express = require('express');
const uploadprescriptionModel = require('../Models/uploadprescriptionModel');
const multer = require('multer');
const uploadprescriptionRouter = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "../client/public/upload")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
uploadprescriptionRouter.post('/upload', upload.single("file"), (req, res) => {
  return res.json("file uploaded")
})

uploadprescriptionRouter.get('/view-prescriptions', async (req, res) => {
  try {
    const prescriptions = await uploadprescriptionModel.find();
    if (prescriptions.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: prescriptions
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: "No prescriptions found"
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    });
  }
});
uploadprescriptionRouter.delete('/prescriptions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPrescription = await uploadprescriptionModel.findByIdAndDelete(id);
    if (!deletedPrescription) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Prescription not found"
      });
    }
    return res.status(200).json({
      success: true,
      error: false,
      message: "Prescription deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    });
  }
});

uploadprescriptionRouter.post('/add-prescription', async (req, res) => {
  try {
    const { login_id, prescriptionimage, date_time } = req.body;
    const newPrescription = new uploadprescriptionModel({
      user_id:req.body.user_id,
      prescriptionimage:req.body.prescriptionimage,
      date_time:req.body.date_time,
    });
    const savedPrescription = await newPrescription.save();
    return res.status(201).json({
      success: true,
      error: false,
      message: "Prescription added successfully",
      data: savedPrescription
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    });
  }
});

module.exports = uploadprescriptionRouter;
