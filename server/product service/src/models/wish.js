import mongoose from "mongoose";
const Schema = mongoose.Schema;

const WishSchema = new Schema({
  userId: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: String,
      price: Number,
    },
  ],
});

const Wish = mongoose.model("wish", WishSchema);
export default Wish;
