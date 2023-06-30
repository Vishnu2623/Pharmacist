const mongoose=require('mongoose')
const schema=mongoose.Schema

const assigndeliveryboySchema=new schema({
    deliveryboy_id:{type:mongoose.Types.ObjectId,ref:"store_register_tb"},
    pincode:{type:String}
})
const assigndeliveryboyModel = mongoose.model('assigndeliveryboy_tb',assigndeliveryboySchema)
module.exports =assigndeliveryboyModel