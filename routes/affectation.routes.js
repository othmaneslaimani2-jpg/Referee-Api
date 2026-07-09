import express, { Router } from 'express';
import { createAffectation, getMatchWithArbitres, deleteAffectation } from '../controllers/affectation.controller.js';
import { validateAffectation } from '../middlewares/validate.middleware.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/',authenticate, authorize('admin', 'commissaire'), validateAffectation, createAffectation);
router.get('/matchs/:id', authenticate, authorize('admin', 'commissaire','arbitre','consultation') ,getMatchWithArbitres);
router.delete('/:id', authenticate, authorize('admin', 'commissaire'), deleteAffectation);

export default router;