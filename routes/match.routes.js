import express from 'express';
import { createMatch, getAllMatchs, getMatchById, updateMatch, deleteMatch } from '../controllers/match.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/',authenticate, authorize('admin', 'commissaire'), createMatch);
router.get('/', authenticate, authorize('admin', 'commissaire', 'arbitre', 'consultation'), getAllMatchs);
router.get('/:id', authenticate, authorize('admin', 'commissaire', 'arbitre', 'consultation'), getMatchById);
router.put('/:id', authenticate, authorize('admin', 'commissaire'), updateMatch);
router.delete('/:id',authenticate, authorize('admin'), deleteMatch);

export default router;