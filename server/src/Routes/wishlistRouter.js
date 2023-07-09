const express = require('express');
const WishlistModel = require('../Models/WishlistModel');

const wishlistRouter = express.Router();


wishlistRouter.post('/add-to-wishlist', async (req, res) => {
  try {
    const data = {
      login_id: req.body.login_id,
      medicine_id: req.body.medicine_id,
      medicinename: req.body.medicinename,
      medicineimage: req.body.medicineimage,
      medicinequantity: req.body.medicinequantity,
      medicineprice: req.body.medicineprice,
    };

    const newWishlistItem = new WishlistModel(data);
    const savedData = await newWishlistItem.save();

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Item added to wishlist successfully',
        data: savedData,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Failed to add item to wishlist',
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


wishlistRouter.get('/view-wishlist', async (req, res) => {
  try {
    const wishlistItems = await WishlistModel.find();
    if (wishlistItems.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: wishlistItems,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No items found in wishlist',
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


wishlistRouter.delete('/delete-from-wishlist/:id', async (req, res) => {
  try {
    const wishlistItemId = req.params.id;
    const deletedWishlistItem = await WishlistModel.findByIdAndDelete(wishlistItemId);
    
    if (deletedWishlistItem) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Item deleted from wishlist successfully',
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Item not found in wishlist',
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

module.exports = wishlistRouter;
