const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    required: [true, "rating must be provided"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["Apple", "Nokia", "Mi", "Samsung"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", ProductSchema);
