const express = require('express');
const axios = require('axios');

const router = express.Router();

const city = [];

router.get('/weather', (req, res, next)=>{
    res.render('weather', {pageTitle: 'weather'});
});


router.get('/', (req, res, next)=>{
    res.render('home', {pageTitle: 'home'});
});

router.post('/weather', (req,res,next)=>{
    city.push({name: req.body.cityname});
    console.log(city[0].name);
    res.redirect('/weather');
})

exports.routes = router;
exports.city = city[0];