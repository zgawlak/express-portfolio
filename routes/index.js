const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('index', { title: 'My Portfolio' }); // Render the 'index.ejs' template
});

// About Page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' }); // Render the 'about.ejs' template
});

// Projects Page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' }); // Render the 'projects.ejs' template
});

// Services Page
router.get('/services', (req, res) => {
  res.render('services', { title: 'Services' }); // Render the 'services.ejs' template
});

// Contact Page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' }); // Render the 'contact.ejs' template
});

module.exports = router;
