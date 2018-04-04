console.log('firing up geocode.js');
const request = require('request');


var processAddress = (address,callback) =>
            {
              var encodedAddress = encodeURIComponent(address);

              request({
                          url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                          json : true
                      },
                      (error, response, body) => {
                          if(error)
                          {
                            callback('something wrong with server ',undefined);
                          }else if (body.status === 'ZERO_RESULTS') {
                            callback('invalid results',undefined);
                          }else if (body.status === 'OK') {
                            callback(undefined,{
                              address  : body.results[0].formatted_address,
                              latitude : body.results[0].geometry.location.lat,
                              longitude: body.results[0].geometry.location.lng
                              // debugger;
                            });
                          }
                      });

            };

// secret key darksky api - 5bf18c4ec1eacd30f41fef1facacbfb0

module.exports = {processAddress};
