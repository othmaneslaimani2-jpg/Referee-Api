import { Match } from '../models/index.js';

export const createMatch = async (req, res) => {
    try {
        const newMatch = await Match.create(req.body);
        return res.status(201).json(newMatch);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create match', details: error.message });
    }
};

export const getAllMatchs = async (req, res) => {
    try {
        const matchs = await Match.findAll();
        return res.status(200).json(matchs);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch matches', details: error.message });
    }
};

export const getMatchById = async (req, res) => {
    try {
        const match = await Match.findByPk(req.params.id);
        if (!match) return res.status(404).json({ error: 'Match not found' });
        return res.status(200).json(match);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch match', details: error.message });
    }
};

export const updateMatch = async (req, res) => {
    try {
        const match = await Match.findByPk(req.params.id);
        if (!match) return res.status(404).json({ error: 'Match not found' });
        
        await match.update(req.body);
        return res.status(200).json(match);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update match', details: error.message });
    }
};

export const deleteMatch = async (req, res) => {
    try {
        const match = await Match.findByPk(req.params.id);
        if (!match) return res.status(404).json({ error: 'Match not found' });
        
        await match.destroy();
        return res.status(200).json({ message: 'Match successfully canceled and deleted' });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete match', details: error.message });
    }
};