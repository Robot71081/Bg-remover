import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongoDB.js';
import userRouter from './routes/user.js';
import { clerkwebHooks } from './controllers/user.js';

const PORT = process.env.PORT || 4000;
const app = express();

async function startServer() {
    await connectDB();

    // Middleware to parse JSON requests
    app.use(express.json());
    app.use(cors());

    // Define API routes
    app.get('/api/user/webhooks', clerkwebHooks);
    app.get('/', (req, res) => res.send('API working'));
     // Make sure this is include

    // Start the server
    app.listen(PORT, () => console.log('Server running on port ' + PORT));
}

startServer().catch(error => console.error('Error starting server:', error));