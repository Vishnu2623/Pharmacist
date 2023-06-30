const express = require('express')
const userRegisterModel = require('../Models/userRegisterModel')
const loginModel = require('../Models/loginModel')
const storeRegisterModel = require('../Models/medicalstoreModel')
const dbRegisterModel = require('../Models/deliveryboyregisterModel')
const UserregRouter = express.Router()

UserregRouter.get('/view-users',async(req,res)=>{
try {
    const users = await userRegisterModel.find()
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


UserregRouter.post('/userreg', async (req, res) => {
    try {

        const oldUser = await loginModel.findOne({ username: req.body.username })
        if(oldUser){
           return res.status(400).json({
                success:false,
                error:true,
                message:"Username already exists"
            })
        }
        const oldEmail = await userRegisterModel.findOne({ email: req.body.email })
        if(oldEmail){
           return res.status(400).json({
                success:false,
                error:true,
                message:"Email already exists"
            })
        }
        const oldPhone = await userRegisterModel.findOne({ phone: req.body.phone })
        if(oldPhone){
           return res.status(400).json({
                success:false,
                error:true,
                message:"Mobile number already exists"
            })
        }
        const login_data = {
            username: req.body.username,
            password: req.body.password,
            status:0,
            role:1
        }

        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data = {
                login_id:save_login._id,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
            }
            const save_register = await userRegisterModel(register_data).save()
            if(save_register){
                return res.status(200).json({
                    success:true,
                    error:false,
                    message:"Registration completed",
                    details:save_register
                })
            }
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

UserregRouter.get('/view-medicalstore',async(req,res)=>{
try {
    const users = await storeRegisterModel.find()
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
UserregRouter.post('/storereg', async (req, res) => {
    try {

        const oldUser = await loginModel.findOne({ username: req.body.username })
        if(oldUser){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Username already exists"
            })
        }
        const oldEmail = await storeRegisterModel.findOne({ email: req.body.email })
        if(oldEmail){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Email already exists"
            })
        }
        const oldLicense_Number = await storeRegisterModel.findOne({  licensenumber: req.body.licensenumber })
        if(oldLicense_Number){
           return res.status(406).json({
                success:false,
                error:true,
                message:"License number already exists"
            })
        }
        const login_data = {
            username: req.body.username,
            password: req.body.password,
            status:0,
            role:2
        }
        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data = {
                login_id:save_login._id,
                name: req.body.name,
                licensenumber: req.body.licensenumber,
                Uploadlicense: req.body.image,
                address: req.body.address,
                pincode: req.body.pincode,
                city: req.body.city,
                email: req.body.email,
                phone: req.body.phone,
        
            }
            const save_register = await storeRegisterModel(register_data).save()
            if(save_register){
                return res.status(201).json({
                    success:true,
                    error:false,
                    message:"Registration completed",
                    details:save_register
                })
            }
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

UserregRouter.get('/view-deliveryboy',async(req,res)=>{
    try {
        const users = await dbRegisterModel.find()
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
UserregRouter.post('/deliveryboyreg', async (req, res) => {
    try {

        const oldUser = await loginModel.findOne({ username: req.body.username })
        if(oldUser){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Username already exists"
            })
        }
        const oldEmail = await dbRegisterModel.findOne({ email: req.body.email })
        if(oldEmail){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Email already exists"
            })
        }
       
        const login_data = {
            username: req.body.username,
            password: req.body.password,
            status:0,
            role:3
        }
        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data = {
                login_id:save_login._id,
                name: req.body.name,
                address: req.body.address,
                pincode: req.body.pincode,
                city: req.body.city,
                email: req.body.email,
                phone: req.body.phone,
        
            }
            const save_register = await dbRegisterModel(register_data).save()
            if(save_register){
                return res.status(201).json({
                    success:true,
                    error:false,
                    message:"Registration completed",
                    details:save_register
                })
            }
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

module.exports = UserregRouter
