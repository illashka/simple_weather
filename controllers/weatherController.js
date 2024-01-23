const weather_controller = require('../controllers/weather');
const ops = require('../routes/main_route')
const Weather = require('../models/getWeather');

const eveningTime = [17,18,20,21,22,23,0,1,2,3,4,5];
const nightPic = 'img/grass_night.png';
const dayPic = 'img/grass_day.png';
const options = ops.options;

exports.getCurrentWeather = function(res, options){
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
}