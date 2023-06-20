import 'express-async-errors';
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import { handleAppErrors } from "./middleware";
import { petRouter, userRouter } from './routes';
dotenv.config();

const app = express();

app
.use(cors())
.use(express.json())
.use("/pet",petRouter)
.use("/user",userRouter)
.use(handleAppErrors)

//Routes

export default app;