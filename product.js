// ye har file data base ky collection ky hisab sy bany gi is file me shema or modal define hong gy
const mongoose = require("mongoose");
const ProductsSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
});

module.exports = mongoose.model("products", ProductsSchema);
