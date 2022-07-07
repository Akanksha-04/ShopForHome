import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import productRouter from "./routes/product.js";
import cartRouter from "./routes/cart.js";
import orderRouter from "./routes/order.js";
import path from "path";

const app = express();

const PORT = process.env.PORT || 5002;

connectDB();

app.use(cors())
app.use(express.json({ limit: '1000mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.static(process.cwd() + '/public'));
app.use('/uploads', express.static('uploads'));
app.get('./uploads', express.static(path.join(process.cwd(), '/uploads')));


app.use(productRouter)
app.use(cartRouter)
app.use(orderRouter)

app.get("/", (req, res) => {
  res.send("ShopForHome Produce Service");
});

app.listen(PORT, () => {
  console.log(`Product services app listening on port${PORT}`);
});
