import authRoutes from "./routes/authRoutes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API e Platformës së Eventeve po funksionon");
});

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Serveri po ekzekutohet në portën ${PORT}`);
});
