import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  price: String,
  imgUrl: String,
  manufacturer: String,

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ProductDetails = mongoose.model("ProductDetails", productSchema);
export default ProductDetails;
