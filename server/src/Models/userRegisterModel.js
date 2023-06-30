const mongoose=require('mongoose')
const schema=mongoose.Schema

const userRegisterSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    email:{type:String},
    phone:{type:String}
})

const userRegisterModel = mongoose.model('user_register_tb',userRegisterSchema)
module.exports =userRegisterModel