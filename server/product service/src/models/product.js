import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
    },
    img: {
        type : String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type:String,
    },
    stock: {
        type:String,

    },
    date_added: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
