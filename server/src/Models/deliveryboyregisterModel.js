const mongoose=require('mongoose')
const schema=mongoose.Schema

const dbRegisterSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    address:{type:String},
    pincode:{type:String},
    city:{type:String},
    email:{type:String},
    phone:{type:String}
})

const dbRegisterModel = mongoose.model('deliveryboy_register_tb',dbRegisterSchema)
module.exports =dbRegisterModel