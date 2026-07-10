import express from 'express';
import { register, login, getMe } from '../controllers/auth.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { validateRegister, validateLogin } from '../middlewares/zod.middleware.js';

const router = express.Router();

router.post('/register',authenticate, authorize('admin'),validateRegister, register);
router.post('/login',validateLogin, login);
router.get('/me', authenticate, getMe);

export default router;