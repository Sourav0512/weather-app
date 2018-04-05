console.log('Firing up promise-2.js');
const request = require('request');

var processAddress = (address) =>
            {
              return new Promise((resolve,reject) => {
                var encodedAddress = encodeURIComponent(address);
                request({
                            url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                            json : true
                        },
                        (error, response, body) => {
                              if(error){
                                reject(error);
                              }
                              else if(body.status === 'ZERO_RESULTS'){
                                reject(error);
                              }else if(body.status === 'OK'){
                                resolve({
                                address  : body.results[0].formatted_address,
                                latitude : body.results[0].geometry.location.lat,
                                longitude: body.results[0].geometry.location.lng
                              });}});
                            }
                            );
            }
// secret key darksky api - 5bf18c4ec1eacd30f41fef1facacbfb0
// processAddress('90210').then((result)=>{
//   console.log(JSON.stringify(result,undefined,4));
// },(error)=>{console.log(`error : ${error}`);});


module.exports = {processAddress};
