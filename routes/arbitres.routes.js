import express from "express";
import { createArbitre, getAllArbitres } from "../controllers/arbitre.controller.js";

const router = express.Router();

router.post('/', createArbitre);
router.get('/', getAllArbitres);

export default router;