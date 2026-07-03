import express from 'express';
import { 
    createArbitre, 
    getAllArbitres, 
    getArbitreById, 
    updateArbitre, 
    deleteArbitre 
} from '../controllers/arbitre.controller.js';

const router = express.Router();

router.post('/', createArbitre);
router.get('/', getAllArbitres);
router.get('/:id', getArbitreById);
router.put('/:id', updateArbitre);
router.delete('/:id', deleteArbitre);

export default router;