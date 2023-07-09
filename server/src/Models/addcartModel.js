const mongoose=require('mongoose')
const schema=mongoose.Schema

const addcartSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    medicine_id:{type:mongoose.Types.ObjectId,ref:"addmedicine_tb"},
    medicinename:{type:String},
    medicineimage:{type:String},
    medicinequantity:{type:String},
    medicineprice:{type:String}

})
const addcartModel = mongoose.model('addcart_tb',addcartSchema)
module.exports =addcartModel