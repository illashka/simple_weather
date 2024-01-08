const weatherOptions = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
      days: '1'
    },
    headers: {
      'X-RapidAPI-Key': '2ec3adeb4emshad86c2b95a387f6p1875cdjsn4db79889c508',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  module.exports = weatherOptions;