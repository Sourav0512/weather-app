console.log('firing up app.js');
const request = require('request');


// the first param is options object and the second param is a callback
request({
            url : 'http://maps.googleapis.com/maps/api/geocode/json?address=Premier%20residencies',
            json : true
        },
        (error, response, body) => {
             // console.log('error:', error); // Print the error if one occurred
             // console.log(JSON.stringify(response,undefined,4)); // Print the response status code if a response was received
             // console.log('==================================');
             // console.log(JSON.stringify(body,undefined,4)); // Print the HTML for the Google homepage.
             console.log(`latitude  : ${body.results[0].geometry.location.lat}`);
             console.log(`longitude : ${body.results[0].geometry.location.lng}`);
        });
