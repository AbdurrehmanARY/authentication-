import express from 'express'
import cookieParser from 'cookie-parser'
import userRouter from './src/route/user.js'
import { router } from './src/route/task.route.js'
import cors from "cors"
export const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public')) 
app.use(cookieParser()) 
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.use('/api/v1/user',userRouter)
app.use('/api/v1/task',router)


