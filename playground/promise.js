console.log('Firing promise.js');
var asyncAdd = (a,b) =>
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
asyncAdd(5,'5').then((result)=>{
  console.log(`result is : ${result}`);
  return asyncAdd(result,10);
},(error)=>{
  console.log(`error is : ${error}`);
}).then((result)=> {console.log(`result : ${result}`);}, (error) => {console.log(`error : ${error}`);});
