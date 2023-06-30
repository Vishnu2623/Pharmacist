const mongoose=require('mongoose')
const schema=mongoose.Schema

const addmedicineSchema=new schema({
    category_id:{type:mongoose.Types.ObjectId,ref:"medicinecategory_tb"},
    subcategory_id:{type:mongoose.Types.ObjectId,ref:"medicinesubcategory_tb"},
    needprescription:{type:String},
    medicinename:{type:String},
    medicinedescription:{type:String},
    medicinequantity:{type:Number},
    medicineprice:{type:Number},
    medicineimage:{type:String}
})
const adminaddmedicineModel = mongoose.model('addmedicine_tb',addmedicineSchema)
module.exports =adminaddmedicineModel