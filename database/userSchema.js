const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastName: String,
  phone: String,
  address: {
    address: String,
    state: String,
    City: String,
    zip_code: String
  },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  role: { type: String, default: "Regular" },
  password: { type: String, required: true },
  cart: [
    {
      product_image: String,
      product_name: String,
      product_price: String,
      product_quantity: String,
      product_size: String
    }
  ],
  bought: [
    {
      id: String,
      date: String,
      payment: String,
      address: String,
      product_Image: String,
      product_name: String,
      product_price: String,
      product_quantity: String,
      product_size: String
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
