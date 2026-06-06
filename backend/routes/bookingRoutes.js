import express from "express";

import {
  krijoRezervim,
  rezervimetEMia,
  anuloRezervim,
} from "../controllers/bookingController.js";

import { mbrojt } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", mbrojt, krijoRezervim);

router.get("/mirezervimet", mbrojt, rezervimetEMia);

router.delete("/:id", mbrojt, anuloRezervim);

export default router;
