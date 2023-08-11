function print(a){
    console.log(a)
}
// exercise level 1
// 1
const dog = {};
//2
console.log(dog);
//3
dog.name = 'buzzo';
dog.legs = 4;
dog.color = 'red'
dog.age = 13;
dog.bark = 'woof woof';
//4 
print(dog);
//5
dog.breed = 'pug';
dog.getDogInfo = function() {
    print(Object.values(this));
}


// // exercise level 2;
// const users = {
//     Alex: {
//       email: "alex@alex.com",
//       skills: ["HTML", "CSS", "JavaScript"],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: "asab@asab.com",
//       skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: "daniel@daniel.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: "daniel@alex.com",
//       skills: ["HTML", "CSS", "JavaScript", "Python"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: "john@john.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: "thomas@thomas.com",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: "paul@paul.com",
//       skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
// //1
//   let max = 0
//   let count = 0
//   let item;
//   for(i in users){
//     count = users[i].skills.length
//     //print(typeof(i))
//     if(count > max){
//         max = count
//         item = i
//     }
//   }
//   print("person with max skills")
//   print(item);
//   count = 0

// //2
// let count2 = 0
// for(i in users){
//     if(users[i].isLoggedIn)
//     count++

//     if(users[i].points >= 50)
//     count2++
// }
// print(count)
// print(count2)
// count = 0

// // 3
// for(i in users){
//     if(users[i].skills.includes("MongoDB") && users[i].skills.includes("Express") && users[i].skills.includes("React") && users[i].skills.includes("Node"))
//     print(i);
// }

// // 4 
// users.kriti = {
//     email: "kriti@paul.com",
//       skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
//       age: 20,
//       isLoggedIn: false,
//       points: 4000
// }
// print(users)

// //5 
// print(Object.keys(users))

// // 6
// for(i in users){
//     print(Object.values(users[i]))
// }

// exercise level 3;
//1 
const personAccount = {
    firstName:'kriti',
    lastName:'arora',
    accountInfo: '1234',
    incomes: {
        primary: 100,
        secondary: 200
    },
    expenses: {
        food: 20,
        clothes: 50
    },
    totalIncome: function (){
        let sum = 0

        for(i in personAccount.incomes)
        sum += i

        return sum
    },
    totalExpense: function (){
        let sum = 0
        let values = Object.values(this.expenses)
        for(i in values)
        sum += i

        return sum
    }
    // totalExpenses: function () {
    //     let tExpenses = 0;
    //     let values = Object.values(this.expenses);
    //     for (let i = 0; i < values.length; i++) {
    //         tExpenses += values[i]
    //     }
    //     return tExpenses
    // },
}
print(personAccount.totalExpenses)

// //2 
// // is this an aray of objects??
// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];



// for(i in users){
//   print(users[i].username)
//   print(users[i].password)
// }
// function signUp(userid, email, password){
// let flag = 0
//   for(i in users){
//     if(users[i].username === userid && users[i].password === password){
//       print('user already exists')
//       flag = 1
//       return
//     }
//   }
//   if(flag === 0){
//     const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
//     let randomString = Array()
//     for(let i = 0; i < 6; i++){
//         randomString.push(chars.charAt(Math.floor(Math.random()*chars.length)))
//     }
//     randomString = randomString.join("");
//   // print(`uid is ${randomString}`)

//     let date = new Date()

//     const newUser = {
//       _id: randomString,
//       username: userid,
//       email: email,
//       password: password,
//       createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
//       isLoggedIn: false
//     }

//     users.push(newUser)
//     print(users[users.length - 1])
//   } 
// }

// function signIn(username, password){
//     let flag = 0
//     for(i in users){
//         if(users[i].username === username && users[i].password === password){
//             users[i].isLoggedIn = true
//             print('sign in complete')
//             flag = 1
//             return
//         }
//     }
//     if(flag = 0)
//     print('username or password incorrect')
// }
// let a = 'kriti'
// let b = 'kriti@.com'
// let c = 'hahaha'
// signUp(a,b,c)
// print(users)
// signIn(a,c)
// print(users)
// let name = 'Thomas'
// let pass = '123333'
// signIn(name, pass)


//3 
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
]

function likeProduct(userid, name){
    for(i in products){
        if(products[i].name === name){
            products[i].likes.push(userid)
        }
        print(products[i].likes)
    }
}

function rateProduct(userid, rating, product){
    for(i in products){
        if(products[i].name === product){
            const rate = {
                userId: userid,
                rate: rating
            }
            products[i].ratings.push(rate)
        }
        print(products[i].ratings)
    }
}

a = 'abcdef'

likeProduct(a, 'TV')
rateProduct(a, 1888, 'Laptop')
print(products)