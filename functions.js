// ----------- FUNCTIONS - DEFAULT PARAMTERS

// function myFunc(url='myUrl', time= 10){

// }

// myFunc('http://whatever.com') // time will be 10

// myFunc('http://whatever.com', 20) // time will be 20

// // pre ES6 that is before ES6

// function myFuncPreES6(url, time) {
//     if(time===undefined) time= 10
// }

/*There is a cool feature in ES6 which is the fact that a function can receive parameters with default values incase the user doesn't inout a value, the default value replaces the missed value.*/


// ----------- FUNCTIONS - REST PARAMETERS

// function withRestParams(...rest) {
//   // rest is an array of all the parameters
//   let sum = 0

//   rest.forEach((currentElement) => (sum = sum + currentElement))

//   //   rest.forEach(function (currentElement) {
//   //     return (sum = sum + currentElement)
//   //   })

//   return sum
// }

// console.log(withRestParams(1))

// console.log(withRestParams(1, 2))

// console.log(withRestParams(1, 2, 3, 4, 5, 6, 7, 8, 9))

// ----------- FUNCTIONS - ARROW FUNCTIONS
/* Arrow functions can not be used every where, the property 'this' willl be referencing the window object(external element). The 'this' property can access stuff internally when we use normal function. so if you have to access an internal property sing the 'this' property make sure you use normal functions syntax */
// () => {};

// function whatever() {
//   console.log(this);
// }

// whatever();

// const arrow = () => {
//   console.log(this);
// };

// arrow();

// const button = document.querySelector();
// button.addEventListener("click", function () {
//   console.log(this); // button
//   this.classList.toggle("on");
// });

// const button = document.querySelector();

// console.log(this); // Window

// button.addEventListener("click", () => {
//   console.log(this); // Window
//   this.classList.toggle("on"); // WILL NOT BE WORKING
// });
