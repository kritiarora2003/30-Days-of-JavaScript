// // exercise level 1
// // yaar mai na console.log likh likh ke thak gyi hu
function print(a){
    console.log(a)
}

// // 1; print your full name in a function
// function fullname(first , last){
//     return `${first} ${last}`
// }
// print(fullname('kriti', 'arora'))

// // 3; function to add two args
// function addNumbers(num1, num2){
//     return (num1 + num2)
// }
// print(addNumbers(3,4))

// // 12; celcius to fahrenheit
// function converCelsiusToFahrenheit(cel){
//     return ((cel*9/5) + 32)
// }
// print(converCelsiusToFahrenheit(32))

// // 13; check BMI
// function calculateBMI(weight, height){
//     bmi = weight/(height * height)
//     if(bmi < 18.5)
//     print(`BMI is ${bmi} and patient is underweight`)
//     else if (bmi > 18.5 && bmi < 24.9)
//     print(`BMI is ${bmi}, and patient is normal weight`)
//     else if (bmi > 25 && bmi < 29.9)
//     print(`BMI is ${bmi} and patient is overweight`)
//     else
//     print(`BMI is ${bmi} and patient is obese`)
// }
// calculateBMI(58, 1.70)

// // 14; check season
// function checkSeason(month){
//     switch(month){
//         case 'jan':
//         case'feb':
//         case'nov':
//         case'dec':
//             print('winter')
//             break
//         case'mar':
//         case'apr':
//             print('spring')
//             break
//         case'may':
//         case'june':
//         case'july':
//             print('summer')
//             break
//         case'aug':
//         case'sept':
//         case'oct':
//             print('autumn')
//             break
//         }
// }
// checkSeason('oct')

// // 15; find max of three numbers
// function maxOfThree(a,b,c){
//     if(a>b){
//         if(a>c)
//         print(a)
//         else
//         print(c)
//     }
//     else{
//         if(b>c)
//         print(b)
//         else
//         print(c)
//     }
// }
// maxOfThree(3,5,3)


// // exercise level 2
// // 2; solving quadratic equation
// function solveQuadEquation(a,b,c){
//     root1 = (-b+(Math.sqrt(b**2 - 4*c*a)))/(2*a)
//     root2 = (-b-(Math.sqrt(b**2 - 4*c*a)))/(2*a)
//     print(`root 1 is ${root1} \n root 2 is ${root2}`)
// }
// solveQuadEquation(1,5,3)

// // 3; waf to print elements of an array
// function printArray(arr){
//     for(const i of arr)
//     print(i)
// }
// const arr = ['kriti', 'arora']
// printArray(arr)

// // 4; print date and time
// function showDateTime(){
//     const now = new Date();
//     const year = now.getFullYear()
//     const month = now.getMonth()+1
//     const date = now.getDate()
//     let hours = now.getHours()
//     let min = now.getMinutes()

//     hours<10
//     ? hours = '0' + hours
//     : hours = hours
//     min < 10
//     ? min = '0' + min
//     : min = min

//     console.log(`${date}-${month}-${year} ${hours}:${min}`)
// }
// showDateTime()

// // 5; function to swap values
// function swap(x,y){
//     let temp = x
//     x = y
//     y = temp 
//     print(x, y)
// }
// swap(3,4)

// // 8; make a function additem which returns an arr after adding an item at the end
// function addItem(arr, val){
//     let newarr = Array(arr.length + 1)
//     newarr = arr
//     newarr.push(val)
//     return newarr
// }
// const a = [1,2,3,4]
// const newarr = addItem(a, 5)
// print(newarr)

// // 9; make function remove item at end of array
// function removeItem(arr){
//     let popped = Array(arr.length - 1)
//     for(let i = 0; i < arr.length -1; i++){
//         popped[i] = arr[i]
//     }
//     return popped
// }
// const popped = removeItem(a)
// print(popped)

// // 14; sum of any number of arguements
// const summation = (...args) => {
//     let sum = 0
//     for(i of args)
//     sum += i
//     print(sum)
// }
// summation(1,2,3,4)

// // 18; ramdo user id genrator
// const userIDgenerator = () => {
//     const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     const id = Array()
//     for(let i = 0; i < 7; i++)
//     id.push(char.charAt(Math.floor(Math.random()*char.length)))
//     print(id.join(''))
// }
// userIDgenerator()


// // exercise level 3
// // 1;
// const userIDgenerator = () => {
//     let n = prompt('enter length of user id desired')
//     let num = prompt('enter number of user ids desired')
//     const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     let id = Array()
//     for(let j = 0; j < num ;j++){
//         for(let i = 0; i < n; i++)
//         id.push(char.charAt(Math.floor(Math.random()*char.length)))
//         print(id.join(''))
//         id = []
//     } 
// }
// userIDgenerator()

// 5; hex to rgb converter
// just make a hex to decimal converter and work is done


// 8; take array as a parameter and return a shuffled array


// // 18; check if a javascript variable name is valid
// // i.e. should not contain \,$,_
// function validVariableName(variable){
//     if(variable.includes('$') || variable.includes('\\') || variable.includes('_'))
//     print('no')
//     else
//     print("yes")
// }
// validVariableName('kriti$')
// validVariableName('kriti')

