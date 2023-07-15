const express = require('express')
const userRegisterModel = require('../Models/userRegisterModel')
const loginModel = require('../Models/loginModel')
const storeRegisterModel = require('../Models/medicalstoreModel')
const dbRegisterModel = require('../Models/deliveryboyregisterModel')
const multer = require('multer');
const UserregRouter = express.Router()
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/public/upload")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
  })
  
  var upload = multer({ storage: storage })
  UserregRouter.post('/upload', upload.single("file"), (req, res) => {
    return res.json("file uploaded")
  })


  UserregRouter.get('/view-single-user/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const medicine = await userRegisterModel.findOne({_id:id });
      if (medicine) {
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
  
UserregRouter.get('/approve/:id', async (req, res) => {
    try {
      const id = req.params.id;
  
      const approve = await loginModel.updateOne({ _id: id }, { $set: { status: 1 } });
  
      if (approve && approve.modifiedCount === 1) {
        return res.status(200).json({
          success: true,
          message: 'User approved',
        });
      } else if (approve && approve.modifiedCount === 0) {
        return res.status(400).json({
          success: false,
          message: 'User not found or already approved',
        });
      } else {
        throw new Error('Error updating user');
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Something went wrong',
        details: error.message,
      });
    }
  });
  UserregRouter.get('/reject/:id', async (req, res) => {
    try {
      const id = req.params.id;
  
      const reject = await loginModel.deleteOne({ _id: id });
  
      if (reject && reject.deletedCount === 1) {
        return res.status(200).json({
          success: true,
          message: 'User rejected',
        });
      } else if (reject && reject.deletedCount === 0) {
        return res.status(400).json({
          success: false,
          message: 'User not found or already rejected',
        });
      } else {
        throw new Error('Error deleting user');
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Something went wrong',
        details: error.message,
      });
    }
  });
  

UserregRouter.get('/view-users',async(req,res)=>{
try {
    const users = await userRegisterModel.aggregate([
        {
          '$lookup': {
            'from': 'login_tbs', 
            'localField': 'login_id', 
            'foreignField': '_id', 
            'as': 'login'
          }
        },
        {
            "$unwind":"$login"
        },
        {
            "$group":{
                '_id':"$_id",
                'name':{"$first":"$name"},
                'email':{"$first":"$email"},
                'phone':{"$first":"$phone"},
                'status':{"$first":"$login.status"},
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
        const users = await storeRegisterModel.aggregate([
            {
              '$lookup': {
                'from': 'login_tbs', 
                'localField': 'login_id', 
                'foreignField': '_id', 
                'as': 'login'
              }
            },
            {
                "$unwind":"$login"
            },
            {
                "$group":{
                    '_id':"$_id",
                    'name':{"$first":"$name"},
                    'licensenumber':{"$first":"$licensenumber"},
                    'Uploadlicense':{"$first":"$Uploadlicense"},
                    'address':{"$first":"$address"},
                    'pincode':{"$first":"$pincode"},
                    'city':{"$first":"$city"},
                    'email':{"$first":"$email"},
                    'phone':{"$first":"$phone"},
                    'status':{"$first":"$login.status"},
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
    UserregRouter.get('/view-medicalstore/:id',async(req,res)=>{
      try {
          const users = await storeRegisterModel.aggregate([
              {
                '$lookup': {
                  'from': 'login_tbs', 
                  'localField': 'login_id', 
                  'foreignField': '_id', 
                  'as': 'login'
                }
              },
              {
                  "$unwind":"$login"
              },
              {
                  "$group":{
                      '_id':"$_id",
                      'name':{"$first":"$name"},
                      'licensenumber':{"$first":"$licensenumber"},
                      'Uploadlicense':{"$first":"$Uploadlicense"},
                      'address':{"$first":"$address"},
                      'pincode':{"$first":"$pincode"},
                      'city':{"$first":"$city"},
                      'email':{"$first":"$email"},
                      'phone':{"$first":"$phone"},
                      'status':{"$first":"$login.status"},
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
  
    UserregRouter.get('/view-profile/:id',async(req,res)=>{
      try {
        const id = req.params.id;
        const users = await storeRegisterModel.aggregate([
          
              {
                '$lookup': {
                  'from': 'login_tbs', 
                  'localField': 'login_id', 
                  'foreignField': '_id', 
                  'as': 'login'
                }
              },
              {
                  "$unwind":"$login"
              },
              {'$match':{
                medical_store_id:new objectId(id)
              }},
              {
                  "$group":{
                      '_id':"$_id",
                      'name':{"$first":"$name"},
                      'licensenumber':{"$first":"$licensenumber"},
                      'Uploadlicense':{"$first":"$Uploadlicense"},
                      'address':{"$first":"$address"},
                      'pincode':{"$first":"$pincode"},
                      'city':{"$first":"$city"},
                      'email':{"$first":"$email"},
                      'phone':{"$first":"$phone"},
                      'status':{"$first":"$login.status"},
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
            status:1,
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
UserregRouter.delete('/deliveryboy/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await dbRegisterModel.findById(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          error: true,
          message: 'User not found'
        });
      }
  
     
      const loginId = user.login_id;
      await loginModel.findByIdAndRemove(loginId);

      await dbRegisterModel.findByIdAndRemove(userId);
  
      return res.status(200).json({
        success: true,
        error: false,
        message: 'User deleted successfully'
      });
  
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Something went wrong',
        details: error
      });
    }
  });
  
module.exports = UserregRouter
