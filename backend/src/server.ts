import 'express-async-errors';
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import { handleAppErrors } from "./middleware";
import { petRouter, userRouter } from './routes';
dotenv.config();

const server = express();

server
.use(cors())
.use(express.json())
.use("/pet",petRouter)
.use("/user",userRouter)
.use(handleAppErrors)

//Routes

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

export default server;