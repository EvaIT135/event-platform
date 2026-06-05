import express from "express";

import {
  merrEventet,
  merrEventin,
  krijoEvent,
  perditesoEvent,
  fshiEvent,
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/", merrEventet);

router.get("/:id", merrEventin);

router.post("/", krijoEvent);

router.put("/:id", perditesoEvent);

router.delete("/:id", fshiEvent);

export default router;
