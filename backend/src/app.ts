import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";


import route from "./routes/userRoutes";

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.use('/',route);


export default app;
