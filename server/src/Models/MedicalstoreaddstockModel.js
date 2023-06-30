const mongoose=require('mongoose')
const schema=mongoose.Schema

const addmedicinestockSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    category_id:{type:mongoose.Types.ObjectId,ref:"medicinecategory_tb"},
    subcategory_id:{type:mongoose.Types.ObjectId,ref:"medicinesubcategory_tb"},
    needprescription:{type:String},
    medicinename:{type:String},
    medicinedescription:{type:String},
    medicinequantity:{type:Number},
    medicineprice:{type:Number},
    medicineimage:{type:String}
})
const addmedicinestockModel = mongoose.model('addmedicinestock_tb',addmedicinestockSchema)
module.exports =addmedicinestockModel