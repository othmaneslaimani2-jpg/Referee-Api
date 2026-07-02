import { Sequelize } from "sequelize";

const sequelize = new Sequelize('referee_db', 'postgres', 'mysecretpassword', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false,
});

export default sequelize;