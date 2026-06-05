import bookingRoutes from "./routes/bookingRoutes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/evente", eventRoutes);
app.use("/api/rezervime", bookingRoutes);

app.get("/", (req, res) => {
  res.send("API e Platformës së Eventeve po funksionon");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveri po ekzekutohet në portën ${PORT}`);
});
