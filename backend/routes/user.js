import express  from "express";
import { clerkwebHooks } from "../controllers/user.js";

const userRouter=express.Router()

userRouter.post('/webhooks',clerkwebHooks)

export default userRouter
