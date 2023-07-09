const express = require('express');
const addcartModel = require('../Models/addcartModel');
const addcartRouter = express.Router();
addcartRouter.post('/add-to-cart', async (req, res) => {
  try {
    const data = {
      medicine_id: req.body.medicine_id, // Use the correct property name that corresponds to the foreign key
      medicinename: req.body.medicinename,
      medicineimage: req.body.medicineimage,
      medicinequantity: req.body.medicinequantity,
      medicineprice: req.body.medicineprice,
    };

    const newcart = new addcartModel(data);
    const savedData = await newcart.save();

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Cart added successfully',
        data: savedData,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Failed to add cart',
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

addcartRouter.get('/view-cart', async (req, res) => {
  try {
    const cart = await addcartModel.find();
    if (cart.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: cart,
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

addcartRouter.delete('/delete-cart/:id', async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const deletedCartItem = await addcartModel.findByIdAndDelete(cartItemId);
    
    if (deletedCartItem) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Cart item deleted successfully',
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Cart item not found',
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


module.exports = addcartRouter;
