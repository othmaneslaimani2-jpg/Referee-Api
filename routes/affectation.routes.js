import express, { Router } from 'express';
import { createAffectation, getMatchWithArbitres, deleteAffectation } from '../controllers/affectation.controller.js';
import { validateAffectation } from '../middlewares/validate.middleware.js';

const router = express.Router();

router.post('/', validateAffectation, createAffectation);
router.get('/matchs/:id', getMatchWithArbitres);
router.delete('/:id', deleteAffectation);

export default router;