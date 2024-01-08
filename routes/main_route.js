const express = require('express');
const axios = require('axios');

const weather_controller = require('../controllers/weather');
const weatherOptions = require('../data/options');

const router = express.Router();

const city = [];

let options = {};

router.get('/weather', (req, res, next)=>{
    res.render('weather', {pageTitle: 'weather'});
    let data = weather_controller.getWeather(options);
    data.then(function(result){
        console.log(result);
        weather_controller.saveWeather(result);
    });

});


router.get('/', (req, res, next)=>{
    res.render('home', {pageTitle: 'home'});
});

router.post('/weather', (req,res,next)=>{
    city.push({name: req.body.cityname});
    console.log(city[city.length-1].name);
    options = {...weatherOptions, params:{q: city[city.length-1].name, ...weatherOptions.params}};
    res.redirect('/weather');
})

exports.routes = router;
exports.city = city[0];