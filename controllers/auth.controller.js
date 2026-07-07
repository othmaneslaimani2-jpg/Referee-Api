import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

export const register = async (req, res) => {
    try {
        const { nom, email, password, role } = req.body;
        const existingUser = await User.findOne({ where: { email }});
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use'});
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
            nom,
            email,
            password: hashedPassword,
            role
        });
        const userResponse = newUser.toJSON();
        delete userResponse.password;

        return res.status(201).json(userResponse);
    } catch (error) {
        return res.status(500).json({ error: 'Registration failed', details: error.message});
    }
    
    };

    export const login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email }});
            if (!user) {
                return res.status(401).json({ error: 'Invalid email or password'});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                return res.status(401).json({ error: 'Invalid email or password'});
            }
            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '1h'}
            );
            return res.status(200).json({ token });
        } catch (error) {
            return res.status(500).json({ error: 'Login failed', details: error.message});
        }
    };

    export const getMe = async (req, res) => {
        try {
            const user = await User.findByPk(req.user.id, {
                attributes: { exclude: ['password']}
            });
            return res.status(200).json(user);
        } catch (error) { 
            return res.status(500).json({ error: 'Failed to fetch profile', details: error.message});
        }
    };
