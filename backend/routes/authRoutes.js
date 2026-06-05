import express from "express";

import {
  regjistrohu,
  hyr
} from "../controllers/authController.js";

const router = express.Router();

router.post("/regjistrohu", regjistrohu);

router.post("/hyr", hyr);

export default router;
