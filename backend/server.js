import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API e Platformës së Eventeve po funksionon");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveri po ekzekutohet në portën ${PORT}`);
});
