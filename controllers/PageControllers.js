const Photo = require('../models/Photo');
exports.getAboutPage = (req, res) => {
  res.render('about');
};
exports.getContactPage = (req, res) => {
    res.render('contact');
};
exports.getPortfolioPage = (req, res) => {
    res.render('portfolio');
};
exports.getTeamPage = (req, res) => {
    res.render('team');
};
exports.getServicesPage = (req, res) => {
    res.render('services');
};



exports.getAddPage = (req, res) => {
  res.render('add');
};
exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
};
