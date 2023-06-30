const express = require('express');
const assigndeliveryboyModel = require('../Models/assigndeliveryboyModel');
const assigndeliveryboyRouter = express.Router();

assigndeliveryboyRouter.get('/view-assigndeliveryboy',async(req,res)=>{
    try {
        const category = await assigndeliveryboyModel.find()
        if(category[0]!=undefined){
            return res.status(200).json({
                success:true,
                error:false,
                data:category
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
assigndeliveryboyRouter.post('/assign_deliveryboy', async (req, res) => {
  try {
    const data = {
        deliveryboy_id: req.body.deliveryboy_id,
        pincode: req.body.pincode,
    };
    const savedData = await assigndeliveryboyModel(data).save();

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

module.exports = assigndeliveryboyRouter;
