const mongoose=require('mongoose')
const schema=mongoose.Schema

const paymentSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    order_id:{type:mongoose.Types.ObjectId,ref:"order_tb"},
    transactionid:{type:String},
    paymenttype:{type:String},
    date:{type:String},
    time:{type:String},
    amount:{type:String},
    status:{type:String}


})
const paymentModel = mongoose.model('payment_tb',paymentSchema)
module.exports =paymentModel