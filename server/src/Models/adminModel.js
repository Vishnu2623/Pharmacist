const mongoose=require('mongoose')
const schema=mongoose.Schema

const adminSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    username:{type:String},
    password:{type:String},
    
})

const adminModel = mongoose.model('admin_register_tb',adminSchema)
module.exports =adminModel