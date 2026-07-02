import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Arbitre = sequelize.define('Arbitre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationalite: {
        type: DataTypes.STRING,
        allowNull: false
    },
    confederation: {
        type: DataTypes.ENUM('UEFA', 'CONMEBOL', 'CAF', 'AFC', 'CONCACAF', 'OFC'),
        allowNull: false
    },
    categorie: {
        type: DataTypes.ENUM('Referee', 'Assistant Referee', 'fourth Official', 'Video Assistant Referee (VAR)', 'VAR Assistant (AVAR)' ),
        allowNull: 'Active'
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Active', 'Suspended', 'Injured', 'Retired'),
        defaultValue: 'Active'
    }
},
{
    tableName: 'arbitres',
    timestamps: false
});

export default Arbitre;