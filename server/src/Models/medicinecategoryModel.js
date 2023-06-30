const mongoose=require('mongoose')
const schema=mongoose.Schema

const medicinecategorySchema=new schema({
    categoryname:{type:String},
    categoryimage:{type:String}
})
const medicinecategoryModel = mongoose.model('medicinecategory_tb',medicinecategorySchema)
module.exports =medicinecategoryModel