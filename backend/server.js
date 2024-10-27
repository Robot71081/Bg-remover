import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongoDB.js';
import userRoutes from './routes/user.js';

const PORT = process.env.PORT || 4000;
const app = express();

async function startServer() {
    await connectDB();

    // Middleware to parse JSON requests
    app.use(express.json());
    app.use(cors());
    app.use((req, res, next) => {
        res.setHeader("Content-Security-Policy", "default-src 'none'; script-src 'self' https://vercel.live;");
        next();
    });


    app.use('/api/user', userRoutes); // Make sure this is included
    // Define API routes
    app.get('/', );
   

    // Start the server
    app.listen(PORT, () => console.log('Server running on port ' + PORT));
}

startServer().catch(error => console.error('Error starting server:', error));
