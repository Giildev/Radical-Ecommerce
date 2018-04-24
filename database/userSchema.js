const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema ({
  //User: {
    email: String,
    password: String
  //}
})

// const userSchema = new Schema({
//   User: {
//     name: String,
//     lastName: String,
//     phoneNumber: String,
//     address: {
//       address: String,
//       state: String,
//       City: String,
//       zip_code: String
//     },
//     email: String,
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now },
//     role: { type: String, default: "Regular" },
//     password: String,
//     cart: [
//       {
//         product_image: String,
//         product_name: String,
//         product_price: String,
//         product_quantity: String,
//         product_size: String
//       }
//     ],
//     bought: [
//       {
//         id: String,
//         date: String,
//         payment: String,
//         address: String,
//         product_Image: String,
//         product_name: String,
//         product_price: String,
//         product_quantity: String,
//         product_size: String
//       }
//     ]
//   }
// });

userSchema.methods.generateHash = function(password) {
  return bcrypt.compareSync(password, bcrypt.genSaltSync(), null);
};

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.User.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
