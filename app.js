console.log('firing up app.js');
const request = require('request');
const yargs = require('yargs');


// const argv = yargs.
//             options(
//               {
//                 address : {
//                              demand : true,
//                              alias : 'a',
//                              describe : 'address to fetch weather for',
//                              string : true
//                           }
//               }
//             )
//             .help()
//             .alias('help','h')
//             .argv;

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;

const argv = yargs
            .command('address','address to fetch info for',undefined)
            // (address) =>
            // {
            //   demand : true,
            //   string : true,
            //    alias : 'a'
            // })
            .options({
              address: {
                demand: true,
                alias: 'a',
              describe: 'enter Address here',
                // string: true
                }
            })
          .help()
          .alias('help','h')
          .argv;

var encodedAddress = encodeURIComponent(argv.address);

console.log(argv);

// the first param is options object and the second param is a callback
request({
            url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json : true
        },
        (error, response, body) => {
             // console.log('error:', error); // Print the error if one occurred
             // console.log(JSON.stringify(response,undefined,4)); // Print the response status code if a response was received
             // console.log('==================================');
             // console.log(JSON.stringify(body,undefined,4)); // Print the HTML for the Google homepage.
             debugger;
             console.log(`address : ${body.results[0].formatted_address}`);
             console.log(`latitude  : ${body.results[0].geometry.location.lat}`);
             console.log(`longitude : ${body.results[0].geometry.location.lng}`);
        });
