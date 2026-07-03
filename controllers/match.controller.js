
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