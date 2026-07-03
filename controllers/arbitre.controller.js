import { Arbitre } from '../models/index.js';

export const getArbitreById = async (req, res) => {
    try {
        const { id } = req.params;
        const arbitre = await Arbitre.findByPk(id);
    if (!arbitre) {
        return res.status(404).json({error: 'Referee not found' });
    }
    return res.status(200).json(arbitre);
} catch (error) {
    return res.status(500).json({ error: 'Failed to fetch referee', details: error.message})
}
};

export const updateArbitre = async (req, res) => {
    try {
        const { id } = req.params;
        const arbitre = await Arbitre.findByPk(id);
        
        if (!arbitre) {
            return res.status(404).json({ error: 'Referee not found' });
        }
        await arbitre.update(req.body);
        return res.status(200).json(arbitre);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update referee', details: error.mesage});

    }
    
};

export const deleteArbitre = async (req, res) => {
    try {
        const { id } = req.params;
        const arbitre = await Arbitre.findByPk(id);

        if (!arbitre) {
            return res.status(404).json({error: 'Referee not found'});
        }
        await arbitre.destroy();
        return res.status(200).json({ message: 'Referee successfully removed from tournament registry'});
    
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete referee', details: error.message})
    }
};