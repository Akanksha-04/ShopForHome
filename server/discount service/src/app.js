import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import auth from "./middleware/auth.js";
import discountRouter from "./routes/discount.js";

const app = express();

const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors())
app.use(express.json());
app.use(discountRouter)



app.get("/",(req, res) => {
  res.send("ShopForHome Discount Service");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
