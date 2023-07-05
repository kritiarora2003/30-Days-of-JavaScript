// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// let regEx = /\d+/

// // d with escape character means d not a normal d instead acts a digit
// // + means one or more digit numbers,
// // if there is g after that it means global, search everywhere.

// console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]


// day 2 tasks
// let challenge = '30 Days Of JavaScript'
// console.log("printing string ", challenge)
// console.log("length " ,challenge.length)
// console.log("to upper case " ,challenge.toUpperCase())
// console.log("to lower case ", challenge.toLowerCase())
// console.log("slice using substr ", challenge.substr(2))   //prints 'days of javascript'
// console.log("slice using substr ", challenge.substr(0,2))    //prints '30'
// console.log("get first word usign substring ",challenge.substring(0,2))
// console.log("Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript. ", challenge.substr(3, 18))
// console.log("check if string present or not", challenge.includes('Script'))
// console.log(challenge.split(' '))

// let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
// console.log(string.split(','))

// console.log("change javascript to python", challenge.replace('JavaScript', 'Python'))
// console.log(challenge.charAt(15))
// // TIL spaces are also considered characters
// let index = challenge.indexOf('J')
// console.log("char code of J ", challenge.charCodeAt(index))
// console.log("index of a ", challenge.indexOf('a'))
// console.log("index of a ", challenge.lastIndexOf('a'))

// let string1 = 'You cannot end a sentence with because because because is a conjunction'
// console.log("first occurence of because ", string1.indexOf('because'))
// console.log("last occurence of because ", string1.lastIndexOf('because'))
// console.log("fisrt index of becuase using seach() ", string1.search('because'))

// challenge = challenge.trim()
// console.log(challenge.trim())
// console.log(challenge.startsWith('3'))
// console.log(challenge.endsWith('t'))

//  console.log(challenge.match(/a/)) // first occurence of a
//  console.log( challenge.match(/a/g))   // all occurenses of a

// let a = '30 days of '
// let b = 'javascript'
// console.log(a.concat(b))
// console.log(challenge.repeat(2))


// // exercise level 2
// 1
// console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// 2
// console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// 3
// let k = '10'
// let l = parseInt(k)
// console.log(typeof(parseInt(k)) == typeof(10))

// 4
// console.log(Math.ceil(parseFloat('9.8')))

// 5
// let a = 'python'
// let b = 'jargon'
// let c = a.includes('on') && b.includes('on')
// console.log(c)

// 6
// let a = 'I hope this course is not full of jargon. Check if jargon is in the sentence.'
// console.log(a.includes('jargon'))

//7
// console.log(Math.floor(Math.random()*101))

//8
// console.log(Math.floor(Math.random()*51)+50)   // (0 to 50)+50 = 50 to 100

// 9
// console.log(Math.floor(Math.random()*256))    // 0 to 255

// 10
// let a = 'JavaScript'
// let b = Math.floor(Math.random()*11)    // 0 to 10
// console.log(a[b])

// 11

// // 12
// let string = 'You cannot end a sentence with because because because is a conjunction'
// let a = 'because'
// let b = a.length
// let c = 3*b+2
// //console.log(c)
// let d = string.indexOf('because')
// //console.log(d)
// console.log(string.substr(d,c))


// EXERCISE LEVEL 3
// 1
// let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let a = string.match(/love/gi)
// console.log(a.length)

// 2 (same as first one)

// // 3.1
// let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// sentence = sentence.replace(/%/g,'').replace(/!/g,'').replace(/@/g,'').replace(/#/g,'').replace(/\$/g,'').replace(/&/g,'').replace(/\?/g,'').replace(/;/g,'')
// console.log(sentence)

// 3.2 Find the word with max occurence
// let words = sentence.split(' ')
// console.log(words)
// let count = 0
// let max = 0
// let temp
// let i , j
// for(i in words){
//     count = 0
//     for (j in words){
//         if(j == i)
//         count++
//         if(count > max){
//             max = count
//             temp = j
//         }
//     }
// }
// console.log(temp)



// // 4 
// let string = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let a = string.match(/\d+/g)
// console.log(a)
// // sabko int me convert karke add kar do



