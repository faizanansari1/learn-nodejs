const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-com");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "RT-22",
    price: 2.03,
    brand: "Nokia",
    category: "LED",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "RT-22" },
    { $set: { price: 407888, name: "YT-33" } }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.deleteOne({ name: "YT-33" });
  console.log(data);
};

// find => (read)
const findInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.find({ name: "RT-22" });
  console.log(data);
};
findInDB();
