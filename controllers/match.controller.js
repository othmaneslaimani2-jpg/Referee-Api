import { Match } from "../models/index.js";

export const createMatch = async (req, res) => {
    try {
        const newMatch = await Match.create(req.body);
        return res.status(201).json(newMatch);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create Match', details: error.message});
    }
};

export const getAllMatchs = async (req, res) => {
    try {
        const matchs = await Match.findAll();
        return res.status(200).json(matchs);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch Matches', details: error.message});
    }
};