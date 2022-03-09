import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Add title"],
  },
  company: {
    type: String,
    require: [true, "Add company"],
  },
  description: {
    type: String,
    require: [true, "Add description"],
  },
  discount: {
    type: String,
  },
  images: {
    type: Array,
    require: [true, "Add images"],
  },
  price: {
    type: String,
    require: [true, "Ingrese título"],
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
