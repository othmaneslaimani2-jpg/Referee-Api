import { Arbitre } from '../models/index.js';

export const createArbitre = async (req, res) => {
    try {
        const newArbitre = await Arbitre.create(req.body);
        return res.status(201).json(newArbitre);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create referee', details: error.message});
    }
};

export const getAllArbitres = async (req, res) => {
    try {
        const arbitres = await Arbitre.findAll();
        return res.status(200).json(arbitres);
    
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch referees', details: error.message});
    }
};