const weather = require("./weather");

module.exports = class WeatherData{
    constructor(city, date, temperature, feelsLike, condition){
        this.city = city;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.date = date;
        this.condition = condition;
    }

    getCity(){
        weather.saveValues('City: ' + this.city + '\n');
        //return this.city;
    }

    getDate(){
        weather.saveValues('Date: ' + this.date + '\n');
        //return this.date;
    }

    getTemp(){
        weather.saveValues('Temperature: ' + this.temperature + '\n');
        //return this.temperature;
    }

    getFeelsLike(){
        weather.saveValues('Feels like: ' + this.feelsLike + '\n');
        //return this.feelsLike;
    }

    getCondition(){
        weather.saveValues('Condition: ' + this.condition + '\n');
        //return this.condition;
    }
}