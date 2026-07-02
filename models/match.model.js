import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Match = sequelize.define('Match', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    equipeDomicile: {
        type: DataTypes.STRING,
        allowNull: false
    },
    equipeExterieur: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    villeHote: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateMatch: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phase: {
        type: DataTypes.ENUM('Groups', '8th', '4th', 'semi-final', 'final'),
        allowNull: false
    }
}, {
    tableName: 'matchs',
    timestamps: false,

    indexes: [
        {
            fields: ['dateMatch']
        }
    ]
});

export default Match;