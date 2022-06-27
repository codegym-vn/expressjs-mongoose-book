import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import bookRoutes from './src/router/book.router';

const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.set('views', './src/views');

const DB_URL = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
console.log(DB_URL, "DB_URL")
mongoose.connect(DB_URL)
.then(() => console.log('DB Connected!'))
.catch(error => console.log('DB connection error:', error.message));
app.use(bodyParser.json());

app.use('/book', bookRoutes);
app.listen(PORT, () => {
  console.log("App running on port: " + PORT)
})
