import express from 'express';
import { clerkwebHooks } from '../controllers/user.js';

const userRoutes = express.Router();

// Define the POST route for webhooks
userRoutes.post('/webhooks',clerkwebHooks);

export default userRoutes;

