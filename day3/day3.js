// exercise level 1
console.log(typeof '10' == 10)
console.log(typeof parseInt('9.8') == 10)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 >= 3)
console.log(4 == 4)
console.log(4 != 4)
console.log(4 === 4)
console.log(4 !== 4)
console.log(4 == '4')
console.log(4 === '4')
console.log(4 != '4')

let a = 'Python' 
let b = 'dragon'
console.log(a.length != b.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

console.log(!(a.includes('on') && b.includes('on')))

const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())


// exercise level 2
// let name = prompt('enter name','name')
// console.log(name)

// name.length>7
// ? console.log('long')
// : console.log('short')

// let fn = 'kriti'
// let ln = 'aroraaaa'
// fn.length > ln.length
// ? console.log(`your first name, ${fn} is longer than your second name, ${ln}`)
// : console.log(`your first name, ${fn} is shorter than your second name, ${ln}`)

const year = now.getFullYear()
const month = now.getMonth()+1
const date = now.getDate()
let hours = now.getHours()
let min = now.getMinutes()

hours<10
? hours = '0' + hours
: hours = hours
min < 10
? min = '0' + min
: min = min

console.log(`${date}-${month}-${year} ${hours}:${min}`)