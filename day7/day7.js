// // arrow funciton
// // Let us access the arguments object
// ​
// const sumAllNums = (...args) => {
//   // console.log(arguments), arguments object not found in arrow function
//   // instead we use a parameter followed by spread operator (...)
//   console.log(args)
// }

// sumAllNums(1, 2, 3, 4)
// // [1, 2, 3, 4]


// // function declaration
// ​
// const sumAllNums = (...args) => {
//   let sum = 0
//   for (const element of args) {
//     sum += element
//   }
//   return sum
// }

// console.log(sumAllNums(1, 2, 3, 4)) // 10


// const square = (n=3) => n*n
// console.log(square())


// // self invoking functions
// (function(n) {
//     console.log(n * n)
//   })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
//   let squaredNum = (function(n) {
//     return n * n
//   })(10)
  
//   console.log(squaredNum)

// // expression functions
// // Function expression
// const square = function(n) {
//     return n * n
//   }
  
//   console.log(square(2)) // -> 4

// // anonymous functions
// // functions without a name
// const anonymousFun = function() {
//     console.log(
//       'I am an anonymous function and my value is stored in anonymousFun'
//     )
//   }
  