const express = require('express');
const { v4: uuidv4 } = require('uuid');
const uploadprescriptionModel = require('../Models/uploadprescriptionModel');
const multer = require('multer');
const mongoose = require('mongoose'); 
const userRegisterModel = require('../Models/userRegisterModel');

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
// uploadprescriptionRouter.get('/view-pres/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const prescriptions = await uploadprescriptionModel.find({store_id:id });
//     if (prescriptions.length > 0) {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         data: prescriptions
//       });
//     } else {
//       return res.status(404).json({
//         success: false,
//         error: true,
//         message: "No prescriptions found"
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       error: true,
//       message: "Something went wrong",
//       details: error
//     });
//   }
// });
uploadprescriptionRouter.get('/viewprescription/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const orders = await uploadprescriptionModel.aggregate([
      {
        $lookup: {
          from:'user_register_tbs',
          localField:'login_id',
          foreignField: 'login_id',
          as:'result',
        },
      },
      {
        $unwind: '$result',
      },
      {
        $match: { 'store_id':new mongoose.Types.ObjectId(id) },
      },
      {
        $group: {
          _id: '$_id',
          login_id:{$first:'$login_id'},
          store_id:{$first:'$store_id'},
          prescriptionimage:{$first:'$prescriptionimage'},
          date_time:{$first:'$date_time'},
          status:{$first:'$status'},
          order_id:{$first:'$order_id'},
          name:{$first:'$result.name'},
          email:{$first:'$result.email'},
          phone:{$first:'$result.phone'},
        },
      },
    ]);

    if (orders.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: orders,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'No data found',
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});
uploadprescriptionRouter.get('/view-prescriptions/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const prescriptions = await uploadprescriptionModel.find({login_id:id});
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
uploadprescriptionRouter.post('/update-prescription-status/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const updatedData = { 
      status: 'Shipped',
    };

    const updatedApplication = await uploadprescriptionModel.updateOne({ order_id: id }, { $set: updatedData });

    if (updatedApplication.nModified > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Status updated successfully",
        details: updatedApplication,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Status not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error,
    });
  }
});

uploadprescriptionRouter.post('/add-prescription', async (req, res) => {
  try {
    const { login_id,store_id, prescriptionimage, date_time } = req.body;
    const orderId = generateRandomNumberString(8); 
    const newPrescription = new uploadprescriptionModel({
      login_id: req.body.login_id,
      store_id: req.body.medicalstore,
      prescriptionimage: req.body.prescriptionimage,
      date_time: req.body.date_time,
      order_id:orderId,
      status:'processing'
    });
    const savedPrescription = await newPrescription.save();

    await userModel.findByIdAndUpdate(login_id, {
      $push: { prescriptions: savedPrescription._id },
    });

    return res.status(201).json({
      success: true,
      error: false,
      message: "Prescription added successfully",
      data: savedPrescription,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error,
    });
  }
});

const generateRandomNumberString = (length) => {
  const numbers = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result += numbers[randomIndex];
  }
  return result;
};
module.exports = uploadprescriptionRouter;
