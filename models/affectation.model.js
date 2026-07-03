import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Affectation = sequelize.define('Affectation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    arbitreId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    matchId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('central', 'assistant', 'VAR', 'AVAR', '4e'),
        allowNull: false
    }
}, {
    tableName: 'affectations',
    timestamps: false,
    
    indexes: [
        {
            unique: true,
            fields: ['arbitreId', 'matchId', 'role'],
            name:'unique_match_referee_role'
        },
        {
            fields: ['arbitreId']
        },
        {
            fields: ['matchId']
        }
        ]

});

export default Affectation;