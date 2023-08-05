const mongoose=require('mongoose')
const schema=mongoose.Schema

const contactSchema=new schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    subject:{type:String},
    message:{type:String},
})
const contactModel = mongoose.model('contact_tb',contactSchema)
module.exports =contactModel