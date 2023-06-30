const mongoose=require('mongoose')
const schema=mongoose.Schema

const prescriptionSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    prescriptionimage:{type:String},
    date:{type:String},
    time :{type:String}

})
const uploadprescriptionModel = mongoose.model('prescription_tb',prescriptionSchema)
module.exports =uploadprescriptionModel