console.log('Firing promise.js');

var aysncAdd = (a,b) =>
{
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Cannot add non numbers');
      }

    },100); //delay of 2.5 seconds
  });
};

aysncAdd(5,5).then((result)=>{
  console.log(`result is : ${result}`);
},(error)=>{
  console.log(`error is : ${error}`);
});
