import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.js";
import auth from "./middleware/auth.js";

const app = express();

const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors())
app.use(express.json());
app.use(userRouter)



app.get("/",auth, (req, res) => {
  res.send("ShopForHome User Service");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
