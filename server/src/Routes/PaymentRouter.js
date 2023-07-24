const { v4: uuidv4 } = require('uuid');
const express = require('express');
const paymentModel = require('../Models/paymentModel');
const addcartModel = require('../Models/addcartModel');

const paymentRouter = express.Router();
const mongoose = require('mongoose'); 
// paymentRouter.post('/process-payment', async (req, res) => {
//   try {
//     const data = {
//       login_id: req.body.login_id,
//       state: req.body.state,
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       housename: req.body.housename,
//       address: req.body.address,
//       addressline: req.body.addressline,
//       city: req.body.city,
//       pincode: req.body.pincode,
//       email: req.body.email,
//       phone: req.body.phone,
//       amount: req.body.amount,
//       cartItems: req.body.cartItems,
//       status: req.body.status,
//       totalamount: req.body.totalamount,
//     };

//     const newPayment = new paymentModel(data);
//     const savedData = await newPayment.save();

//     if (savedData) {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         message: 'Payment processed successfully',
//         data: savedData,
//       });
//     } else {
//       return res.status(400).json({
//         success: false,
//         error: true,
//         message: 'Failed to process payment',
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       error: true,
//       message: 'Something went wrong',
//       details: error,
//     });
//   }
// });
paymentRouter.get('/store-orders',async(req,res)=>{
  try {
      const users = await paymentModel.aggregate([
        {
          '$lookup': {
            'from': 'addmedicinestock_tbs', 
            'localField': 'medicine_id', 
            'foreignField': '_id', 
            'as': 'storeorder'
          },
        },
          {
              "$unwind":"$storeorder"
          },
          {
            $project: {
              _id: 1,
              date: 1,
              firstname:1,
              order_id: 1,
              email:1,
              phone:1,
              medicinequantity: 1,
              totalAmount: 1,
              amount:1,
              address: 1,
              status:'processing',
              medicinename: '$storeorder.medicinename',
              medicineimage: '$storeorder.medicineimage',
            },
          },
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
paymentRouter.get('/view-details',async(req,res)=>{
  try {
      const users = await paymentModel.aggregate([
        {
          $lookup: {
            from: 'addmedicine_tbs',
            localField: 'medicine_id',
            foreignField: '_id',
            as: 'order',
          },
        },
          {
              "$unwind":"$order"
          },
          {
            $project: {
              _id: 1,
              date: 1,
              firstname:1,
              order_id: 1,
              email:1,
              phone:1,
              medicinequantity: 1,
              totalAmount: 1,
              amount:1,
              address: 1,
              medicinename: '$order.medicinename',
              medicineimage: '$order.medicineimage',
            },
          },
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
  
paymentRouter.get('/view-order/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const order = await paymentModel.findOne({ login_id:id});
    if (order) {
      return res.status(200).json({
        success: true,
        error: false,
        data: order,
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
paymentRouter.get('/view-myorder/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const order = await paymentModel.find({ login_id: id });
    if (order) {
      return res.status(200).json({
        success: true,
        error: false,
        data: order,
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


paymentRouter.get('/myorder/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const orders = await paymentModel.aggregate([
      {
        $lookup: {
          from: 'addmedicine_tbs',
          localField: 'medicine_id',
          foreignField: '_id',
          as: 'medicine',
        },
      },
      {
        $unwind: '$medicine',
      },
      {
        $match: { 'login_id':new mongoose.Types.ObjectId(id) },
      },
      {
        $group: {
          _id: '$_id',
          date: { $first: '$date' },
          order_id: { $first: '$order_id' },
          medicinequantity: { $first: '$medicine.medicinequantity' },
          totalAmount: { $first: '$totalAmount' },
          address: { $first: '$address' },
          medicinename: { $first: '$medicine.medicinename' },
          medicineimage: { $first: '$medicine.medicineimage' },
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
paymentRouter.get('/view-details/:trackingNumber', async (req, res) => {
  try {
    const trackingNumber = req.params.trackingNumber;

    const order = await paymentModel.aggregate([
      {
        $match: { order_id: trackingNumber }, 
      },
      {
        $lookup: {
          from: 'addmedicine_tbs',
          localField: 'medicine_id',
          foreignField: '_id',
          as: 'medicine',
        },
      },
      {
        $unwind: '$medicine',
      },
      {
        $project: {
          _id: 1,
          date: 1,
          order_id: 1,
          medicinequantity: 1,
          totalAmount: 1,
          address: 1,
          status: 'processing',
          medicinename: '$medicine.medicinename',
          medicineimage: '$medicine.medicineimage',
        },
      },
    ]);

    if (order.length > 0) {
      res.status(200).json({ success: true, data: order[0] }); 
    } else {
      res.status(404).json({ success: false, message: 'Order not found' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching order details' });
    console.error(err);
  }
});



paymentRouter.post('/save-order/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const carts = await addcartModel.find({ login_id: id });
    console.log(carts);
    carts.forEach((item) => {
      item.price = item.medicineprice * item.medicinequantity;
    });

    let totalAmount = 0;

    for (let i = 0; i < carts.length; i++) {
      totalAmount += carts[i].price;
    }
    const datas = [];
    const dateString = new Date();
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0];
    for (let i = 0; i < carts.length; i++) {
      const orderId = generateRandomNumberString(8); 
      const orderData = new paymentModel({
        medicine_id: carts[i].medicine_id,
        login_id: carts[i].login_id,
        medical_store_id:null,
        state: req.body.state,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        housename: req.body.housename,
        address: req.body.address,
        addressline: req.body.addressline,
        city: req.body.city,
        pincode: req.body.pincode,
        email: req.body.email,
        phone: req.body.phone,
        amount: req.body.amount,
        status:'processing',
        order_id: orderId,
        medicinename: req.body.medicinename,
        medicinequantity: carts[i].medicinequantity,
        time: req.body.time,
        date: formattedDate,
        totalAmount:totalAmount,
        status: 0,
      });

      datas.push(await orderData.save());
    }

    const cart_data = await addcartModel.deleteMany({ login_id: id });

    res.status(201).json({
      success: true,
      error: false,
      message: 'Order completed',
    });
  } catch (err) {
    res.status(500).json({ success: false, error: true, message: 'Something Went Wrong' });
    console.log(err);
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

module.exports = paymentRouter;
