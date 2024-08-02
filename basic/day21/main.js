// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// Object the baisc


// let user = {
//   name: "Abishek",
//   roll: 1,
//   sem: "3rd",
//   age: 21,
//   "likes birds": true
// };

// // Object { key: value, key: "value"}

// console.log(user.name);
// console.log(user.age )

// user.isAdmin = true;

// console.log(user.isAdmin);

// delete user.sem;

// console.log(user["like birds"]);

// asking input from user and making a 



// let user = {
//     national: "Nepal.",
//     language: "Nepali",
//     age: 34
// }

// askName = prompt("Hey, bro! Enter your name.", "Abishek Neupane")
// askDateOfBirth = prompt("Hey, bro! Enter your DOB.", 2004)


// // user.name = askName;
// // user.DOB = askDateOfBirth;

// user[askName];
// user[askDateOfBirth];

// console.log(user)
// console.log(name);
// console.log(DOB);


// let fruit = prompt("Enter the fruitd: ", "apple");

// let bag = {
//     [fruit]: 5
// }

// alert(bag.apple)


function makeUserID(name, age) {
    return {
        name: name,
        age: age
    };
}

// let user2 = makeUserID("Abishek", 21);
// let user3 = makeUserID("Abinash", 28);
// let user4 = makeUserID("Bhagawati", 50)

// console.log(user2.name)
// console.log(user4.name)
// console.log(user2);

// console.log(user3);
// console.log(user4);


// Objects can be used the reserved words.

// let obj = {
//     for: 1,
//     let: 2, 
//     return: 3 
// }

// console.log(obj.for + obj.let + obj.return)


// let user = {
//     name: "Abishek",
//     sem: "4th",
//     roll: 1
// }

// // console.log( 4 in user);

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }





// Solution :)

// let user = {
//     name: "John",
//     surname: "Smith",
// }

// user.name = "Pete"

// delete user.name;

//Solution - 2


// function isEmpty(obj) {
//     for (let key in obj) {
//         return true;
//     }
//     return false;
// }

// Solution - 3

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// //   Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
  
// //   If salaries is empty, then the result must be 0.

// let sum = 0;
// for ( keys in salaries) {
//     sum = sum + salaries[keys]
 
// }
// console.log(sum)

// // Objects keeps reference not like primitive data types,

// let user = { name: "John"};
// let admin = user;

// user.name = "Abishek";

// // console.log(admin.name);

// let user = {name: "Abishek"};

// let canEditPermission = { canEdit: true};
// let canViewPermission = {canView: false};

// Object.assign(user, canEditPermission, canViewPermission);
// console.log(user.canEditPermission);
// console.log(user.canViewPermission);


// Garbage collection


// Object this :)

// let user = {
//     name: "Abishek",
//     role: "Software Devloper",
//     age: 21
// };

// user.sayHi = function() {
//     alert("Hello");
// };

// user.sayHi();


// a function that is property of object is called method. 

// let user1 = {
//     sayHi() {
//         alert("I am sayinh, HIIII!");
//     }
// };


// Using this. 

let user = {
    name: "Abishek",
    age: 21,
    sayHi() {
        alert(this.name);
    }
};

user.sayHi()




