import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./config/db.js";

import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// app config
const app = express();

const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());

app.use(cors());

// db connection
connectDB();

// api endpoints
app.get("/", (req, res) => {
  res.send("API Working");
});

// routes
app.use("/api/food", foodRouter);

app.use("/images", express.static("uploads"));

app.use("/api/user", userRouter);

app.use("/api/cart", cartRouter);

app.use("/api/order",orderRouter);

// listen
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});