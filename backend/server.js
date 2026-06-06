import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

connectDB();

const app = express();

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API e Platformës së Eventeve po funksionon");
});

app.get("/test-cors", (req, res) => {
  res.json({
    mesazh: "CORS TEST OK",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/evente", eventRoutes);
app.use("/api/rezervime", bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveri po ekzekutohet në portën ${PORT}`);
});