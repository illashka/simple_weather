const express = require('express');
const axios = require('axios');

const weather_controller = require('../controllers/weather');
const weatherOptions = require('../data/options');
const Weather = require('../controllers/getWeather');

const router = express.Router();

const city = [];

let options = {};

let eveningTime = [17,18,20,21,22,23,0,1,2,3,4,5];
let nightPic = 'img/grass_night.png';
let dayPic = 'img/grass_day.png';

router.get('/weather', (req, res, next)=>{
    let currentCity,currentDate, currentTemp, currentFeels, currentCondition;
    let data = weather_controller.getWeather(options);
    data.then(function(result){
        console.log(result);
        weather_controller.saveWeather(result);
        
        weatherClass = new Weather((result.location.name),
                                     (result.location.localtime),
                                     (result.current.temp_c),
                                     (result.current.feelslike_c),
                                     (result.current.condition.text));
        currentCity = weatherClass.getCity();
        currentDate = weatherClass.getDate();
        currentTemp = weatherClass.getTemp();
        currentFeels = weatherClass.getFeelsLike();
        currentCondition = weatherClass.getCondition();
    }).then(function(){
        res.render('weather', {pageTitle: 'weather', 
        cityname: currentCity,
        citydate: currentDate,
        citytemp: currentTemp,
        cityfeels: currentFeels,
        citycond: currentCondition,
        // Verify if it's evening/night or morning/day
        currentImage: eveningTime.includes(parseInt(currentDate.slice(10))) ? nightPic : dayPic
    })});

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
        ...weatherOptions.params}};
    res.redirect('/weather');
})

exports.routes = router;
exports.city = city[0];