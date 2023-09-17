const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const app = express();
const dotenv = require('dotenv');
const db = require('./config/db');
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const myLogger = (req, res, next) => {
    console.log('Middleware Log 1');
    next();
}; 

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(myLogger);  


const PORT = process.env.PORT || 5000;

db();

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
