const express = require('express');
const axios = require('axios');

const weather_controller = require('../controllers/weather');
const weatherOptions = require('../data/options');
const Weather = require('../models/getWeather');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

const city = [];

let options = {};

router.get('/weather', (req, res, next)=>{
    weatherController.getCurrentWeather(res,options);
});


router.get('/', (req, res, next)=>{
    res.render('home', {pageTitle: 'home'});
});

router.post('/weather', (req,res,next)=>{
    city.push({name: req.body.cityname});
    console.log(city[city.length-1].name);
    options = {...weatherOptions, params:{
        // IF user left form empty
        q: city[city.length-1].name != '' ? city[city.length-1].name : 'Moscow', 
        days: '2',
        ...weatherOptions.params}};
    res.redirect('/weather');
})

exports.routes = router;
exports.city = city[0];
exports.options = options;