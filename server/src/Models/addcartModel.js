const mongoose=require('mongoose')
const schema=mongoose.Schema

const addcartSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    order_id:{type:mongoose.Types.ObjectId,ref:"'order_tb'"},
    medicinename:{type:String},
    medicineimage:{type:String},
    quantity:{type:String},
    amount:{type:String}

})
const addcartModel = mongoose.model('addcart_tb',addcartSchema)
module.exports =addcartModel