// // exercise level 1
// // 1
// for(let i = 0; i < 11; i++){
//     console.log(i)
// }
// let j = 0
// while(j < 11){
//     console.log(j)
//     j++
// }

// let k = 0
// do{
//     console.log(k)
//     k++
// }while(k < 11)

// // 3
// let n = prompt("enter a number")
// for(let i = 0; i < n; i++){
//     for(let j = 0; j <= i; j++){
//         console.log("#")
//     }
//     console.log('\n')
// }

// // 4 
// for(let i = 0; i <= 100; i++){
//     let flag = 0;
//     for(let j = 2 ; j <= Math.sqrt(i); j++){
//         if(i % j === 0){
//             flag = 1
//             break
//         }
//     }
//     if(flag === 0 )
//         console.log(i)
// }

// // 7
// const a = Array(5)
// for(let i = 0; i < 5; i++){
//     a[i] = Math.floor(Math.random()*11)
// }
// for(i of a){
//     console.log(i)
// }
// console.log(a)

// // 8
// let temp
// a[0] = Math.floor(Math.random()*11)
// for(let i = 1; i < 5;){
//     let flag = 0
//     temp = Math.floor(Math.random()*11)
//     for(let j = 0; j < i; j++){
//         if (temp === a[j]){
//             flag = 1
//             break
//         }
//     }
//     if(flag === 0){
//         a[i] = temp
//         i++;
//     }
// }
// console.log(a)

// // 9 generate a string of 6 random characters, numbers and alphabets
// // i need to generate a random number from 0-9 i.e. (48 to 57)
// // and a random character from 97 to 122

// const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
// let randomString = Array()
// for(let i = 0; i < 6; i++){
//     randomString.push(chars.charAt(Math.floor(Math.random()*chars.length)))
// }
// console.log(randomString.join(''))


// // exercise level 2
// // 1 
// // generate a random string of length 0 to 100
// let length = Math.floor(Math.random()*101)
// const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
// let arr = Array()
// for(let i = 0; i < length; i++){
//     arr.push(chars.charAt(Math.floor(Math.random()*chars.length)))
// }
// console.log(arr.join(''))

// // 2 : generate a hexadecimal number
// let n = 6
// const xeh = '0123456789abcdef'
// let hex = Array()
// hex[0]='#'
// for (let i = 1; i <= n ; i++){
//     hex.push(xeh.charAt(Math.floor(Math.random()*xeh.length)))
// }
// console.log(hex.join(''))

// // 3 generate a random rgb color number
// // generate a number from 0 to 255
// let rgb = Array()
// for(let i = 0; i < 3; i++){
//     rgb.push(Math.floor(Math.random()*256))
// }
// console.log(rgb)


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Sri Lanka',
    'The United States Of America'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  const fruit = ['banana', 'orange', 'mango', 'lemon']
  
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

// // 4
// for(let i = 0; i < countries.length; i++){
//     countries[i] = countries[i].toUpperCase()
// }
// console.log(countries)

// // 5
// for(let i = 0; i < countries.length; i++){
//     countries[i] = countries[i].length
// }
// console.log(countries)

// // 6
// for(let i = 0; i < countries.length; i++){
//     countries[i] = [countries[i], countries[i].substring(0,3).toUpperCase(), countries[i].length]
// }
// console.log(countries)

// // 7
// let land = Array()
// let flag = 0
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].includes('land')){
//         flag = 1
//         land.push(countries[i])
//     }
// }
// if( flag === 0)
// console.log('all countries are without land')
// else
// console.log(land)

// // 8
// let ia = Array()
// let flag = 0
// for(let i = 0; i < countries.length; i++){
//     if(countries[i][countries[i].length - 1] === 'a' && countries[i][countries[i].length - 2] === 'i'){
//         ia.push(countries[i])
//         flag =1 
//     }
// }
// if (flag === 0)
// console.log('countreis dont have ia')
// else
// console.log(ia)

// // 9
// let max = countries[0].length
// let ans
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].length > max){
//         max = countries[i].length
//         ans = countries[i]
//     }
// }
// console.log(ans)

// // 10
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].length === 5){
//         console.log(countries[i])
//     }
// }

// // 13
// for(let i = 0; i < mernStack.length; i++){
//     console.log(mernStack[i][0])
// }

// // 15
// let output = Array()
// let n = fruit.length
// for(let i = 0; i < n; i++){
//     output[i] = fruit.pop()
// }
// console.log(output)

// // 16
// for(let i = 0; i < fullStack.length; i++){
//     for(let j = 0; j < fullStack[i].length; j++){
//         console.log(fullStack[i][j])
//     }
// }


// // exercise level 3
// // 2
// let sortedCountries = countries.sort()
// console.log(sortedCountries)

// // 8 : if there is a country with two or more words, print it
// let flag= 0
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].includes(' ')){
//         flag = 1
//         console.log(countries[i])
//     }
// }
// if (flag === 0)
// console.log('all countries are only one word in length')