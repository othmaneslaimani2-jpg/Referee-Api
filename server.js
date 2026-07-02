import express from 'express';
import { sequelize } from './models/index.js';
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the RefTech World Cup API! ⚽');
});

async function startServer() {
    try {
        await sequelize.sync({ alter: true });
        console.log("✅ Database synchronized and tables created successfully.");

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.log('❌ Unable to connect or sync database:', error);
    }
}

startServer();