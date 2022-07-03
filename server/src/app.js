import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
// import orderRouter from "./routes/order.js";
// import cartRouter from "./routes/cart.js";

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors())
app.use(express.json());
app.use(userRouter)
app.use(productRouter)
// app.use(cartRouter)
// app.use(orderRouter)

app.get("/", (req, res) => {
  res.send("ShopForHome");
});

app.listen(PORT, () => {
  console.log("Example app listening on port 5000!");
});
