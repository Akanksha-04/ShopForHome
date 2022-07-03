import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
};

export default connectDB;
