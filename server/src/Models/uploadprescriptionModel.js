const mongoose = require('mongoose');

const { Schema } = mongoose; 

const prescriptionSchema = new Schema({
  login_id: { type: mongoose.Types.ObjectId, ref: "login_tb" },
  prescriptionimage: { type: String },
  date_time: { type: Date }, 
});

const uploadprescriptionModel = mongoose.model('prescription_tb', prescriptionSchema);
module.exports = uploadprescriptionModel;
