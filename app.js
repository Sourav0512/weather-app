console.log('firing up app.js');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const darksky = require('./playground/darksky.js');

const argv = yargs
            .command('address','address to fetch info for',{string:true})
            .options({
              address:
               {
                demand: true,
                alias: 'a',
                describe: 'enter Address here',
               }
            })
          .help()
          .alias('help','h')
          .argv;

geocode.processAddress(argv.address,(error,results)=>
        {
          if(error && (results === undefined)){
            console.log(error);
          }
          else {
            darksky.fetchWeather(results.longitude,
                                 results.latitude,
                                 (error,weatherResults) => {
                                   if (error) {
                                    console.log(error);
                                   } else {
                                     console.log(`weather is still ${weatherResults.temperature}.It is actually  ${weatherResults.apparentTemperature}.`);
                                   }

                                 });
            console.log(`address is at ${JSON.stringify(results.address,undefined,4)}`);
          }
        });
