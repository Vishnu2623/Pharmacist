const express = require('express')
const loginModel = require('../Models/loginModel')
const userRegisterModel = require('../Models/userRegisterModel')
const storeRegisterModel = require('../Models/medicalstoreModel')
const dbRegisterModel = require('../Models/deliveryboyregisterModel')

const loginRouter = express.Router()


loginRouter.post('/login', async (req, res) => {
    try {
   
        const oldUser = await loginModel.findOne({ username: req.body.username })
        
        if (!oldUser) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "User not found !"
            })
        }
        if (oldUser.password == req.body.password) {
            if (oldUser.role == '0') {
                return res.status(200).json({
                    success: true,
                    error: false,
                    role:oldUser.role,
                    login_id: oldUser._id,
                    details: oldUser
                })
            }
          
            if (oldUser.role == '1') {
                console.log(oldUser);
                const user= await userRegisterModel.findOne({ login_id: oldUser._id });
                if (user) {
                  return res.status(200).json({
                    success: true,
                    error: false,
                    login_id: oldUser._id,
                    role:oldUser.role,
                    user_id: user._id,
                    status: oldUser.status,
                    details: oldUser
                  })
                }
              }
            if (oldUser.role == '2') {
                console.log(oldUser);
                const medicalStore = await storeRegisterModel.findOne({ login_id: oldUser._id });
                if (medicalStore) {
                  return res.status(200).json({
                    success: true,
                    error: false,
                    login_id: oldUser._id,
                    role:oldUser.role,
                    medical_store_id: medicalStore._id,
                    status: oldUser.status,
                    details: oldUser
                  })
                }
              }
              if (oldUser.role == '3') {
                const deliveryBoy = await dbRegisterModel.findOne({ login_id: oldUser._id });
                if (deliveryBoy) {
                  return res.status(200).json({
                    success: true,
                    error: false,
                    role:oldUser.role,
                    login_id: oldUser._id,
                    delivery_boy_id: deliveryBoy._id,
                    status: oldUser.status,
                    details: oldUser
                  })
                }
              }
              
            } else {
            return res.status(406).json({
                success: false,
                error: true,
                message: "Password not matching!"
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
module.exports = loginRouter
