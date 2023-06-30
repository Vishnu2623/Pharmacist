const mongoose=require('mongoose')
const schema=mongoose.Schema

const storeRegisterSchema=new schema({
    
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    licensenumber:{type:String},
    Uploadlicense:{type:String},
    address:{type:String},
    pincode:{type:String},
    city:{type:String},
    email:{type:String},
    phone:{type:String}
})

const storeRegisterModel = mongoose.model('store_register_tb',storeRegisterSchema)
module.exports =storeRegisterModel