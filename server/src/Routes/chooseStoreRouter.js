const express = require('express');
const chooseStoreRouter = express.Router();
const addmedicinestockModel = require('../Models/MedicalstoreaddstockModel');
const mongoose = require('mongoose'); 

chooseStoreRouter.get('/view-store-medicine/:name',async(req,res)=>{
  try {
    const name =req.params.name
    console.log(name);
      const users = await addmedicinestockModel.aggregate([
          {
            '$lookup': {
              'from':'store_register_tbs', 
              'localField': 'login_id', 
              'foreignField': 'login_id', 
              'as': 'medicine'
            }
          },
          {
              "$unwind":"$medicine"
          },
          {
            '$match':{
                'medicine.name':name
            }
          },
          {
              "$group":{
                  '_id':"$_id",
                  'name':{"$first":"$medicineimage"},
                  'store_id':{"$first":"$medicine._id"},
                  'needprescription':{"$first":"$needprescription"},
                  'medicinename':{"$first":"$medicinename"},
                  'medicinedescription':{"$first":"$medicinedescription"},
                  'medicinequantity':{"$first":"$medicinequantity"},
                  'medicineprice':{"$first":"$medicineprice"},
                  'medicineimage':{"$first":"$medicineimage"},
                  'login_id':{"$first":"$login._id"},
              }
          }
        ])
      if(users[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:users
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
 
  chooseStoreRouter.get('/view-chinnu/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const medicine = await addmedicinestockModel.find({_id:id });
      if (medicine.length > 0) {
        return res.status(200).json({
          success: true,
          error: false,
          data:medicine,
        });
      } else {
        return res.status(400).json({
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
        details: error,
      });
    }
  });
  

module.exports =chooseStoreRouter;