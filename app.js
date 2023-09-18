const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const dotenv = require('dotenv');
const db = require('./config/db');
const pageControllers = require('./controllers/pageControllers');
const photoController = require('./controllers/photoControllers');
dotenv.config();
const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/about', pageControllers.getAboutPage);
app.get('/clients', pageControllers.getClientsPage);
app.get('/services', pageControllers.getServicesPage);
app.get('/team', pageControllers.getTeamPage);
app.get('/contact', pageControllers.getContactPage);
app.get('/add', pageControllers.getAddPage);
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);
app.get('/photos/edit/:id', pageControllers.getEditPage);

//Server
const PORT = process.env.PORT || 5000;

db();

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda başlatıldı.`);
});
