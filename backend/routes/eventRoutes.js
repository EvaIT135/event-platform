import express from "express";

import {
  merrEventet,
  merrEventin,
  krijoEvent,
  perditesoEvent,
  fshiEvent,
} from "../controllers/eventController.js";

import {
  mbrojt,
  admin
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", merrEventet);

router.get("/:id", merrEventin);

router.post("/", mbrojt, admin, krijoEvent);

router.put("/:id", mbrojt, admin, perditesoEvent);

router.delete("/:id", mbrojt, admin, fshiEvent);

export default router;
