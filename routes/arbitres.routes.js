import express from 'express';
import { 
    createArbitre, 
    getAllArbitres, 
    getArbitreById, 
    updateArbitre, 
    deleteArbitre 
} from '../controllers/arbitre.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', authenticate, authorize( 'admin', 'commissaire'), createArbitre);
router.get('/', authenticate, authorize('admin', 'commissaire', 'arbitre','consultation' ), getAllArbitres);
router.get('/:id', authenticate, authorize('admin', 'commissaire', 'arbitre', 'consultation'), getArbitreById);
router.put('/:id', authenticate, authorize('admin', 'commissaire'), updateArbitre);
router.delete('/:id', authenticate, authorize('admin') ,deleteArbitre);

export default router;