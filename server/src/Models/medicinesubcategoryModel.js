const mongoose=require('mongoose')
const schema=mongoose.Schema

const medicinesubcategorySchema=new schema({
    category_id:{type:mongoose.Types.ObjectId,ref:"medicinecategory_tb"},
    subcategoryname:{type:String},
    subcategoryimage:{type:String}
})
const medicinesubcategoryModel = mongoose.model('medicinesubcategory_tb',medicinesubcategorySchema)
module.exports =medicinesubcategoryModel