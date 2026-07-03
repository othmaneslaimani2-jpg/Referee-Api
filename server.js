import express from 'express';
import { sequelize } from './models/index.js';
import arbitreRoutes from './routes/arbitres.routes.js';
import matchRoutes from './routes/match.routes.js';
import affectationRoutes from './routes/affectation.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { logger } from './middlewares/logger.middleware.js';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());

app.use('/api/arbitres', arbitreRoutes);

app.use('/api/matchs', matchRoutes);

app.use('/api/affectations', affectationRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the RefTech World Cup API! ⚽');
});

app.use(errorHandler);

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