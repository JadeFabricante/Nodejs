const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/pages.json'), 'utf8'));

router.get('/', (req, res) => {
    res.render('layout', { title: pages.home.title, message: pages.home.message });
});

router.get('/about', (req, res) => {
    res.render('layout', { title: pages.about.title, message: pages.about.message });
});

router.get('/contact', (req, res) => {
    res.render('layout', { title: pages.contact.title, message: pages.contact.message });
});

router.get('/services', (req, res) => {
    res.render('layout', { title: pages.services.title, message: pages.services.message });
});

router.use((req, res) => {
    res.status(404).render('layout', { title: '404', message: 'page not found' });
});

module.exports = router;