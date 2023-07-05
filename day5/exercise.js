// exercise level 1
// // 5
// const arr = [67, 'kriti', true, {cities: ['gwalior', 'delhi']}, {contry:'india'}]
// console.log(arr.length)
// console.log(arr)

// // 6
// let comp = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const arr = comp.split(', ')
// console.log(arr)

// // 8 
// console.log(arr.length)

// // 9 
// let mid
// (arr.length%2 == 0)
// ? mid = arr.length/2
// : mid = (arr.length - 1)/2
// console.log(arr[0], arr[mid], arr[arr.length -1])

// // 11
// for(i in arr)
// console.log(arr[i].toUpperCase())

// // 12
// console.log(arr.join())

// // 13
// let ip = prompt('enter company name', 'enter company name')
// arr.includes(ip)
// ? console.log(ip)
// : console.log(`${ip} does not exist`)

// // 14
// let oo = []
// for(i in arr){
//     if(arr[i].includes('oo'))
//     oo.push(arr[i])
// }
// console.log(oo)

// // 17
// console.log(arr.slice(0,3))

// // 18
// console.log(arr.slice(-3))


// // exercise level 2
// //console.log(countries)
// //console.log(webTechs)
// // HAVE TO FIND OUT WHY THIS DOESNT WORK HERE BUT WORKS IN MAIN.JS

// // 2
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// text = text.replace('.', '')
// text = text.replace(',', '')
// const words = text.split(' ')
// console.log(words)
// console.log(words.length)

// // 3
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// // 4 
// shoppingCart.unshift('meat')
// // 5
// if(!shoppingCart.includes('sugar'))
// shoppingCart.push('sugar')
// console.log(shoppingCart)
// // 6
// let honey = prompt("are you allergic to honey?", 'yes or no')
// let index = shoppingCart.indexOf('Honey')
// console.log(index)
// if(honey=='yes')
// shoppingCart.splice(index,1)
// console.log(shoppingCart)
// // 7
// let id = shoppingCart.indexOf('Tea')
// shoppingCart[id] = 'Green Tea'
// console.log(shoppingCart)


// // exercise level 3
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort()
// let minAge = ages[0]
// let maxAge = ages[ages.length - 1]
// let size = ages.length
// let mid
// (size % 2 == 0)
// ? mid = (ages[size/2] + ages[(size-2) / 2])/2
// : mid = ages[(size-1)/2]
// console.log(mid)
// console.log(minAge)
// console.log(maxAge)
// console.log("range is ", maxAge - minAge)

// let sum = 0
// for(i in ages)
// sum = sum + ages[i]
// console.log("average is ", sum/ages.length)
// console.log(Math.abs(minAge - (sum/ages.length)))
