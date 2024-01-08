const axios = require('axios');
const express = require('express');

const fs = require('fs');

const data = require('../routes/main_route')

const city = data.city;

/*const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
      q: city.name,
      days: '3'
    },
    headers: {
      'X-RapidAPI-Key': '2ec3adeb4emshad86c2b95a387f6p1875cdjsn4db79889c508',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };*/

exports.saveWeather = function saveWeather(weather){
    fs.writeFile('./data/fetched_data.json', JSON.stringify(weather), function(err){
      if(err){
        return console.log(err);
      }
    });
}

exports.getWeather = async function getWeather(options){
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//Save necessary values into result.json
exports.saveValues = function saveValues(value){
  fs.writeFile('./data/result.json', '', function(err){
    if(err){
      return console.log(err);
    }
  });
  fs.appendFile('./data/result.json', value.toString(), function(err){
    if(err){
      return console.log(err);
    }
  });
}