import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import router from "./routes/router.js";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/mongodb_config.js";
import authRouter from "./routes/authRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import productRoutes from "./routes/productRouter.js";

const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(morgan("dev"));
dotenv.config();

connectDB();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);

app.use("/api/v1/product", productRoutes);

app.listen(8080, () => {
  console.log("🚀 Server running on http://localhost:8080 🔥");
});
