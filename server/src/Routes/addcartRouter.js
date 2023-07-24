const express = require('express');
const addcartModel = require('../Models/addcartModel');
const addcartRouter = express.Router();
addcartRouter.post('/add-to-cart', async (req, res) => {
  try {
    const { login_id, medicine_id, medicinename, medicineimage, medicinequantity, medicineprice } = req.body;
    const existingCartItem = await addcartModel.findOne({ login_id, medicine_id });

    if (existingCartItem) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Medicine already exists in the cart",
      });
    }
    const data = {
      login_id:req.body.login_id,
      medical_store_id:req.body.medical_store_id,
      medicine_id: req.body.medicine_id, 
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

addcartRouter.get('/view-cart/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await addcartModel.find({login_id:id});
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
// addcartRouter.get('/view-cart/:id', async (req, res) => {
//   try {
    
//     const cardItems = await  addcartModel.find();
//     if (cardItems.length > 0) {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         data: cardItems,
//       });
//     } else {
//       return res.status(400).json({
//         success: false,
//         error: true,
//         message: 'No items found in wishlist',
//       });
//     }
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       error: true,
//       message: 'Something went wrong',
//       details: error,
//     });
//   }
// });

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
addcartRouter.put('/update-cart/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedQuantity = req.body.medicinequantity;

    const updatedCartItem = await addcartModel.findByIdAndUpdate(
      itemId,
      { medicinequantity: updatedQuantity },
      { new: true }
    );

    if (updatedCartItem) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Cart item updated successfully',
        data: updatedCartItem,
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
