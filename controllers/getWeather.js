module.exports = class WeatherData{
    constructor(city, date, temperature, feelsLike, condition){
        this.city = city;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.date = date;
        this.condition = condition;
    }

    getCity(){
        return this.city;
    }

    getDate(){
        return this.date;
    }

    getTemp(){
        console.log(this.temperature);
        return this.temperature;
    }

    getFeelsLike(){
        return this.feelsLike;
    }

    getCondition(){
        return this.condition;
    }
}