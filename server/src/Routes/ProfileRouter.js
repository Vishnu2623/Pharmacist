const express = require('express');
const storeRegisterModel = require('../Models/medicalstoreModel');
const ProfileRouter = express.Router();



ProfileRouter.get('/view-store-myprofile/:id', async (req, res) => {
    try {
    
      const id=req.params.id;
      const student = await storeRegisterModel.find({login_id:id}); 
  
      if (student) {
        return res.status(200).json({
          success: true,
          error: false,
          data: student
        });
      } else {
        return res.status(400).json({
          success: false,
          error: true,
          message: "No data found"
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







module.exports = ProfileRouter;
