import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import productRouter from "./routes/product.js";

const app = express();

const PORT = process.env.PORT || 5002;

connectDB();

app.use(cors())
app.use(express.json());
app.use(productRouter)
app.use(cartRouter)
app.use(orderRouter)

app.get("/", (req, res) => {
  res.send("ShopForHome Produce Service");
});

app.listen(PORT, () => {
  console.log(`Product services app listening on port${PORT}`);
});
