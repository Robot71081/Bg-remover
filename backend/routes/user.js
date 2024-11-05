import express from 'express';
import { clerkwebHooks } from '../controllers/user.js';

const app = express.Router();

// Define the POST route for webhooks
app.post('/webhooks',clerkwebHooks);

export default app;

