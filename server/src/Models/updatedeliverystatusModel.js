const mongoose=require('mongoose')
const schema=mongoose.Schema

const updatedeliverySchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    order_id:{type:mongoose.Types.ObjectId,ref:"order_tb"},
    Billing_id:{type:mongoose.Types.ObjectId,ref:"billing_address_tb"},
    date:{type:String},
    time:{type:String},
    updatestatus:{type:String}


})
const updatedeliverystatusModel = mongoose.model('update_delivery_tb',updatedeliverySchema)
module.exports =updatedeliverystatusModel