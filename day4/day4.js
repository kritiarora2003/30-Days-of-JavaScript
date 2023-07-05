console.log('Hello, welcome to day 4 of learning JavaScript\n')

// exercise level 1
// 1
// let age = prompt("Enter your age:")
// age>=18
// ? console.log('you are old enough to drive')
// : console.log(`you are left with ${18-age} years to drive`)

// 2 
// let num = prompt('Enter a number')
// if(num%2===0)
// console.log('num is even')
// else
// console.log('num is odd')


// exercise level 2
// let score =prompt('enter your score')
// switch(true){
//     case score>=80 && score <=100: console.log('A');
//         break;
//     case (score>=70 && score <80): console.log('B');
//         break;
//     case (score>=60 && score <70): console.log('C');
//         break;
//     case (score>=50 && score <60): console.log('D');
//         break;
//     case (score>=0 && score <50): console.log('F');
//         break;
//     default:
//         console.log('not a valid score')
// }


//seasons
// let month = prompt("enter month to check seasons");
// switch (month) {
//     case "september":
//     case "october":
//     case "November":
//         console.log("the season is Autumn");
//         break;
//     case "december":
//     case "january":
//     case "febuary":
//         console.log("the season is Winter");
//         break;
//     case "march":
//     case "april":
//     case "may":
//         console.log("the season is Spring");
//         break;
//     case "june":
//     case "july":
//     case "august":
//         console.log("the season is Summer");
//         break;
//     default:
//         console.log("invalid Month")
// }


// exercise level 3
let month = prompt('Enter a month')
if(month.toLowerCase() == `january`)
console.log('31 days')
else if(month.toLowerCase() == `feburary`)
console.log('28 days')
else if(month.toLowerCase() == `march`)
console.log('31 days')
else if(month.toLowerCase() == `april`)
console.log('30 days')
else if(month.toLowerCase() == `may`)
console.log('31 days')
else if(month.toLowerCase() == `june`)
console.log('30 days')
else if(month.toLowerCase() == `july`)
console.log('31 days')
else if(month.toLowerCase() == `august`)
console.log('31 days')
else if(month.toLowerCase() == `september`)
console.log('30 days')
else if(month.toLowerCase() == `october`)
console.log('31 days')
else if(month.toLowerCase() == `november`)
console.log('30 days')
else if(month.toLowerCase() == `december`)
console.log('31 days')
else
console.log('invalid month')





