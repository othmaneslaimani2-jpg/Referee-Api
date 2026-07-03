import express from 'express';
import { createMatch, getAllMatchs } from '../controllers/match.controller.js';

const router = express.Router();

router.post('/', createMatch);
router.get('/', getAllMatchs);

export default router;