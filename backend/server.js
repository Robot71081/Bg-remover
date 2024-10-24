import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongoDB.js'
import userRouter from './routes/user.js';

const PORT =process.env.PORT || 4000
const app= express()
await connectDB()

//middlewares
app.use(express.json())
app.use(cors())

//api routes
app.get('/',(req,res)=>res.send('API working'))
app.use('/api/user',userRouter)




app.listen(PORT,()=>console.log('server running on port ' +PORT))