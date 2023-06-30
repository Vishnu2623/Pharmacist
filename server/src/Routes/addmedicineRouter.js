const express = require('express');
const adminaddmedicineModel = require('../Models/adminaddmedicineModel');
const addmedicineRouter = express.Router();
addmedicineRouter.get('/view-medicine',async(req,res)=>{
  try {
      const medicine = await adminaddmedicineModel.find()
      if(medicine[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:medicine
          })
      }else{
          return res.status(400).json({
              success:false,
              error:true,
              message:"No data found"
          })
      }
  } catch (error) {
      return res.status(400).json({
          success:false,
          error:true,
          message:"Something went wrong",
          details:error
      })
  }
  })
addmedicineRouter.post('/add_medicine', async (req, res) => {
  try {
    const data = {
      category_id: req.body.category_id,
      subcategory_id: req.body.subcategory_id,
      needprescription:req.body.needprescription,
      medicinename:req.body.medicinename,
      medicinedescription:req.body.medicinedescription,
      medicinequantity:req.body.medicinequantity,
      medicineprice:req.body.medicineprice,
      medicineimage:req.body.medicineimage,
     
    };
    const savedData = await adminaddmedicineModel(data).save();

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Registration completed",
        details: savedData
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    });
  }
});

module.exports = addmedicineRouter;
