import { Affectation, Arbitre, Match } from "../models/index.js";

export const createAffectation = async (req, res) => {
    try {
        const { arbitreId, matchId, role} = req.body;

        const arbitreExists = await Arbitre.findByPk(arbitreId);
        if (!arbitreExists) {
            return res.status(404).json({ error: 'Referee not found' });
        } 
        const matchExists = await Match.findByPk(matchId);
        if (!matchExists) {
            return res.status(404).json({ error: 'Match not found'});
        }
        const newAffectation = await Affectation.create({ arbitreId, matchId, role});
        return res.status(201).json(newAffectation);
    } catch (error) {
        return res.status(400).json({ error: 'Assignment failed', details: error.message});
    }
};

export const deleteAffectation = async (req, res) => {
    try {
        const affectation = await Affectation.findByPk(req.params.id);
        if (!affectation) return res.status(404).json({ error: 'Assignment not found' });
        
        await affectation.destroy();
        return res.status(200).json({ message: 'Referee successfully unassigned from match' });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to remove assignment', details: error.message });
    }
};

export const getMatchWithArbitres = async (req, res) => {
    try {
        const { id } = req.params;
        const matchData = await Match.findByPk(id, {
            include: {
                model: Affectation,
                attributes: ['role'],
                include: {
                    model: Arbitre,
                    attributes: ['id', 'nom', 'prenom', 'categorie']
                }
            }
        });
        if (!matchData) {
            return res.status(404).json({ error: 'Match not found'});
        }
        return res.status(200).json(matchData);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching data', details: error.message});
    }
}