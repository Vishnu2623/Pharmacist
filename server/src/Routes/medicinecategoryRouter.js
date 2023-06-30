const express = require('express');
const medicinecategoryModel = require('../Models/medicinecategoryModel');
const medicinesubcategoryModel = require('../Models/medicinesubcategoryModel');

const medicinecatgoryRouter = express.Router();

medicinecatgoryRouter.get('/view-category',async(req,res)=>{
  try {
      const category = await medicinecategoryModel.find()
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

medicinecatgoryRouter.post('/medicine_category', async (req, res) => {
  try {
    const data = {
      categoryname: req.body.categoryname,
      categoryimage: req.body.categoryimage
    };
    const savedData = await medicinecategoryModel(data).save();

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


medicinecatgoryRouter.get('/view-subcategory',async(req,res)=>{
  try {
      const subcategory = await medicinesubcategoryModel.find()
      if(subcategory[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:subcategory
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
medicinecatgoryRouter.post('/medicine_subcategory', async (req, res) => {
  try {
    const data = {
      category_id:req.body.category_id,
      subcategoryname: req.body.subcategoryname,
      subcategoryimage: req.body.subcategoryimage
    };
    const savedData = await medicinesubcategoryModel(data).save();

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

module.exports = medicinecatgoryRouter;
