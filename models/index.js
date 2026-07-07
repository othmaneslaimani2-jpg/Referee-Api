import sequelize from "../config/database.js";
import Arbitre from "./arbitre.model.js";
import Match from "./match.model.js";
import Affectation from "./affectation.model.js";
import User from './user.model.js'

Arbitre.hasMany(Affectation, { foreignKey: 'arbitreId', targetKey: 'id'});
Affectation.belongsTo(Arbitre, { foreignKey: 'arbitreId', targetKey: 'id'});

Match.hasMany(Affectation, { foreignKey: 'matchId', targetKey: 'id'});
Affectation.belongsTo(Match, { foreignKey: 'matchId', targetKey: 'id'});

export { sequelize, Arbitre, Match, Affectation, User};