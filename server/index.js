// Base page for execution

import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';



const PORT=8000;

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Frontend and backend on same browser is not allowed ie on port 3000 and port 8000
app.use('/', Routes);

dotenv.config();

const username = process.env.DB_username;
const password = process.env.DB_password;

Connection(username,password);

app.listen(PORT,()=>console.log(`Server Running successfully on port ${PORT}`));

DefaultData();
