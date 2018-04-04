// secret key darksky api - 5bf18c4ec1eacd30f41fef1facacbfb0
// 19.0795697,42.887732224234
console.log('firing up darksky.js');
const request = require('request');
const key = '5bf18c4ec1eacd30f41fef1facacbfb0';

var fetchWeather = (longitude,latitude,callback) => {

              request({
                url: `https://api.darksky.net/forecast/${key}/${longitude},${latitude}`,
                json: true
              }, (error, response, body) => {
                if (error) {
                  callback('Unable to connect to Forecast.io server.');
                } else if (response.statusCode === 400) {
                  callback(response.error);
                } else if (response.statusCode === 200) {
                  callback(undefined,{
                    temperature : body.currently.temperature,
                    apparentTemperature : body.currently.apparentTemperature
                  })
                }else {
                  console.log('forbidden');
                }
              });

            };

module.exports.fetchWeather = fetchWeather;
