// ----------- BLOCK BINDINGS

// const max = 19

// const max2

// if(condition){
//     const maxItems = 2
//     console.log(maxItems)
// }

// // maxItems here it's undefined

// if(condition){
//     let maxItems = 2
//     console.log(maxItems)
// }

// // maxItems here it's undefined

// if(condition){
//     var maxItems = 10
// }

// // maxItems is still available (BAD)

// var mess = 10

// const mess = 20

// let mess = 30

// const whatever = 10

// whatever = 30 // FORBIDDEN

// const person = {
//     name: 'John'
// }

// person.name = 'Arnold' // OK

// person = { // FORBIDDEN
//     name: 'Steven'
// }

// // LET VS VAR

// for(var i=0; i<10; i++){
//     // your code
// }

// console.log(i) // i is still accessible outside for loop (BAD!)

// for(let i=0; i<10; i++){
//     // your code
// }

// console.log(i) // not accessible

 // ------------------- BLOCK BINDING---------------------
 if(condition){
    const myVar = 123456;
    //myVar is only visible here
}
// here const myVar is undefined as it is outside the scope in which it was declared.
if(condition){
   let myVar = 123456;
   //myVar is only visible here
}
// here let myVar is undefined as it is outside the scope in which it was declared.

if(condition){
   var myVar = 123456;
   //myVar is visible here and outside and as a result let was created to prevent the confusions caused by var
}

//var myVar is also visble here.
//do not ever use var, use let, preferable use const.