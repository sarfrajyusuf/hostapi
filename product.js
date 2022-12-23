require("dotenv").config();
const connectDB = require("./db/connect");
const { startSession } = require("./models/products");
const Product = require("./models/products");
const ProductJson = require("./product.json");

const Start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
Start();
