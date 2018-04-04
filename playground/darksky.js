// secret key darksky api - 5bf18c4ec1eacd30f41fef1facacbfb0
console.log('firing up darksky.js');
const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/5bf18c4ec1eacd30f41dfef1facacbfb0/19.0795697,42.887732224234',
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Forecast.io server.');
  } else if (response.statusCode === 400) {
    console.log(response.error);
  } else if (response.statusCode === 200) {
    console.log(body.currently.temperature);
  }else {
    console.log('forbidden');
  }
});
