const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  login_id: { type: mongoose.Types.ObjectId, ref: "login_tb" },
  cart_id: { type: mongoose.Types.ObjectId, ref: "addcart_tb" },
  medical_store_id:{ type: mongoose.Types.ObjectId, ref: "store_register_tb" },
  state: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  housename: { type: String },
  address: { type: String },
  addressline: { type: String },
  city: { type: String },
  pincode: { type: String },
  email: { type: String },
  phone: { type: String },
  date: { type:Date},
  order_id: { type:String},
  status: { type:String},
  medicinequantity: { type: String },
  totalAmount: { type: String },
  medicine_id:{type: mongoose.Types.ObjectId, ref: "addmedicine_tb"},
 

     
    });
const paymentModel = mongoose.model('payment_tb', paymentSchema);
module.exports = paymentModel;
