import express from 'express';
import { createMatch, getAllMatchs, getMatchById, updateMatch, deleteMatch } from '../controllers/match.controller.js';

const router = express.Router();

router.post('/', createMatch);
router.get('/', getAllMatchs);
router.get('/:id', getMatchById);
router.put('/:id', updateMatch);
router.delete('/:id', deleteMatch);

export default router;