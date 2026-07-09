import express from 'express';
import { register, login, getMe } from '../controllers/auth.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register',authenticate, authorize('admin'),register);
router.post('/login', login);
router.get('/me', authenticate, getMe);

export default router;