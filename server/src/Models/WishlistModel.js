const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
  login_id: { type: mongoose.Types.ObjectId, ref: "login_tb" },
  medicine_id: { type: mongoose.Types.ObjectId, ref: "addmedicine_tb" },
  medicinename: { type: String },
  medicineimage: { type: String },
  medicinequantity: { type: String },
  medicineprice: { type: String }
});

const WishlistModel = mongoose.model('wishlist_tb', WishlistSchema);
module.exports = WishlistModel;
