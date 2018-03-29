// var clientData = {
//     id: 094545,
//     fullName: '',
//     // setUserName is a method on the clientData object​
//     setUserName: function (firstName, lastName)  {
//         // this refers to the fullName property in this object​
//       this.fullName = firstName + " " + lastName;
//     }
// }
// ​
// ​function getUserInput(firstName, lastName, callback)  {
//     // Do other stuff to validate firstName/lastName here​
// ​
//     // Now save the names​
//     callback (firstName, lastName);
// }
//
// //  the following code example, when clientData.setUserName is executed, this.fullName will not set the fullName property on the clientData
// // object. Instead, it will set fullName on the window object, since getUserInput is a global function.
// //  This happens because the this object in the global function points to the window object.
//
//
// getUserInput ("Barack", "Obama", clientData.setUserName);
// ​
// console.log (clientData.fullName);// Not Set​
// ​
// ​// The fullName property was initialized on the window object​
// console.log (window.fullName); // Barack Obama



var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Sourav'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObject) => {
  console.log(userObject);
});
