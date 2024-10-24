import express from 'express';
import { clerkwebHooks } from '../controllers/user.js';

const userRouter = express.Router();

// Define the POST route for webhooks
userRouter.post('/webhooks', clerkwebHooks);

export default userRouter;

