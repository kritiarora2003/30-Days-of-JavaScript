// //scope.js
function print(a){
    console.log(a)
}
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible


// //scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible


// //scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// // Function scope
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let value = false
// // block scope
//   if (true) {
//     // we can access from the function and outside the function but 
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let c = 30
//     let d = 40
//     value = !value
//     console.log(a, b, c, value) // Python 20 30 true
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, value) // JavaScript 10 true
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible


// //scope.js
// function letsLearnScope() {
//     var gravity = 9.81
//     const grav = 10
//     let g = 11
//     console.log("abhi function me hain")
//     console.log(gravity)
//     console.log(g)
//     console.log(grav)
//   }
//   letsLearnScope()
//   //console.log(gravity) // takes undefined data type value
//   //console.log(g)      // err: g not defined
//   //console.log(grav)   // err: grav not defined
  
//   if (true){
//     var gravity = 9.81
//     const grav = 10
//     let g = 11
//     console.log(gravity)
//     console.log(g)
//     console.log(grav)
//   }
//   console.log(gravity)   // prints 9.81
//     //console.log(g)         // err: g not defined
//     //console.log(grav)      // err: grav not defined
  
//   for(var i = 0; i < 3; i++){
//     console.log(i) // 0, 1, 2
//   }
//   console.log(i) // 3

  
// //   for(const j= 0; j < 3; j++){
// //     console.log(j) // 0, 1, 2
// //   }
// //   console.log(j) // 3
// // err: assignment ot const variable

//   for(let k  = 0; k < 3; k++){
//     console.log(k) // 0, 1, 2
//   }
//   //console.log(k) // err: k not defined


///////////// OBJECT //////////////
// empty object
const person = {}

// object with values
const rectangle = {
    length: 20,
    width: 40,
    color: 'red' ,
    likability: 'medium' ,
    recommendOrNot: true,
    getRectangle: function(){
        return `${this.color} ${this.length}`
    },
    corners: {
        curved: true,
        notCurved: false,
        convex: true
    }
}
print(rectangle)
print(rectangle.getRectangle())

// new property formation
rectangle.rate = 5
print(rectangle)

// accessing values of objects
print(rectangle.likability)

// Object manipulation methods
// assign: to copy an object without modigying the original object
const copy = Object.assign({}, rectangle)
print(copy)
// getting object keys
// to get the keys as an array
const keys = Object.keys(copy)
print(keys)
const func = Object.keys(copy.corners)
print(func)
// using object.values
// to get the values of an object as an array
const values = Object.values(rectangle)
print(values)
// using entries
// to get keys and values as an array
print(Object.entries(rectangle))
// to check if a key or property exists in an object or not
print(rectangle.hasOwnProperty('color'))



