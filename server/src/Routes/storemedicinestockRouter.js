const express = require('express');
const addmedicinestockModel = require('../Models/MedicalstoreaddstockModel');
const multer = require('multer');
const storemedicinestockRouter = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "../client/public/upload")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
storemedicinestockRouter.post('/upload', upload.single("file"), (req, res) => {
  return res.json("file uploaded")
})

storemedicinestockRouter.get('/view-medicinestock',async(req,res)=>{
  try {
    const users = await addmedicinestockModel.aggregate([
      {
        $lookup: {
          from: 'medicinecategory_tbs',
          localField: 'category_id',
          foreignField: '_id',
          as: 'medicine'
        }
      },
      {
        $lookup: {
          from: 'medicinesubcategory_tbs',
          localField: 'subcategory_id',
          foreignField: '_id',
          as: 'subcategory'
        }
      },
      {
        $unwind: '$medicine'
      },
      {
        $unwind: '$subcategory'
      },
      {
        $group: {
          _id: '$_id',
          categoryname: { $first:'$medicine.categoryname'},
          subcategoryname: { $first:'$subcategory.subcategoryname'},
          needprescription: { $first: '$needprescription'},
          medicinename: { $first:'$medicinename'},
          medicinedescription: { $first:'$medicinedescription'},
          medicinequantity: { $first:'$medicinequantity'},
          medicineprice: { $first:'$medicineprice'},
          medicineimage: { $first:'$medicineimage'},
        }
      }
    ]);

    if (users.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'No data found'
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error
    });
  }
});
storemedicinestockRouter.post('/add_medicinestock', async (req, res) => {
  try {
    const data = {
      login_id:req.body.login_id,
      category_id:req.body.category_id,
      subcategory_id: req.body.subcategory_id,
      needprescription: req.body.needprescription,
      medicinename: req.body.medicinename,
      medicinedescription: req.body.medicinedescription,
      medicinequantity: req.body.medicinequantity,
      medicineprice: req.body.medicineprice,
      medicineimage: req.body.medicineimage
    };

    const newMedicine = new addmedicinestockModel(data);
    const savedData = await newMedicine.save();

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Medicine added successfully',
        data: savedData
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Failed to add medicine'
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error
    });
  }
});
storemedicinestockRouter.delete('/delete-medicine/:id', async (req, res) => {
  try {
    const medicineId = req.params.id;
    const deletedmedicine = await addmedicinestockModel.findByIdAndDelete(medicineId);
    if (deletedmedicine) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Medicine deleted successfully',
        data: deletedmedicine,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Medicine not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});


storemedicinestockRouter.put('/edit-medicine/:id', async (req, res) => {
  try {
    const medicineId = req.params.id;
    const updatedData = {
      login_id: req.body.login_id,
      category_id: req.body.category,
      subcategory_id: req.body.medicinesubcategory,
      needprescription: req.body.needprescription,
      medicinename: req.body.medicinename,
      medicinedescription: req.body.medicinedescription,
      medicinequantity: req.body.medicinequantity,
      medicineprice: req.body.medicineprice,
      medicineimage: req.body.medicineimage
    };

    const updatedMedicine = await addmedicinestockModel.findByIdAndUpdate(medicineId, updatedData, { new: true });

    if (updatedMedicine) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Medicine category updated successfully',
        data: updatedMedicine,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Medicine category not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});



module.exports = storemedicinestockRouter;
