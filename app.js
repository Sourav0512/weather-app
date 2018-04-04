console.log('firing up app.js');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

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
            console.log(`Address below ===> `);
            console.log(`weather : ${JSON.stringify(results,undefined,4)}`);
          }
        });
