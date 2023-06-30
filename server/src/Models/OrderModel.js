const mongoose=require('mongoose')
const schema=mongoose.Schema

const orderSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    medicine_id:{type:mongoose.Types.ObjectId,ref:"addmedicinestock_tb"},
    medicinename:{type:String},
    quantity:{type:String},
    date:{type:String},
    time:{type:String},
    amount:{type:String}

})
const OrderModel = mongoose.model('order_tb',orderSchema)
module.exports =OrderModel