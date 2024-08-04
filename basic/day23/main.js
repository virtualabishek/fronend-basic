console.log("Learning Array from root.")

let arr = new Array();
let arr1 = [];

let fruits = ["Banana", "Apple", "Mango"];
console.log(fruits[0]);

fruits[3] = "Pineapple";
console.log(fruits);

console.log(fruits.length);

console.log(fruits.at(-1));
 // stack -LIFO 

 // Queue _FIFO

 console.log(fruits.pop())

 console.log(fruits.push("Guava"));
 console.log(fruits)

 // push - pop,add or delete elements at last

 console.log(fruits.shift()) 
 console.log(fruits.unshift("Grapes"));
 console.log(fruits)

 //shift unshift add and removes or add at first

 for(let i =0; i<=fruits.length; i++){
    console.log(fruits[i]);
 }

 let arr3 = [
    [1,2,3],
    [3,43,2],
    [4,43,4]
 ];


 let arr4 = [1,432,53,2]

 console.log(arr4.sort())

 //Splice
 let array = ["I", "want", "to", "be", "master", "at", "JavaScript"];
 delete array[0]; 
 console.log(array);

 array.slice(0,1)
 console.log(array);
 
 let users = [
   {id: 1, name: "Abishek"},
   {id: 2, name: "Abinash"},
   {id: 3, name: "Bhagawati"}
 ];

 let user = users.find(item => item.id == 1);
 console.log(user.name)

 let user2 = users.find(item => item.id ==2)
 console.log(user2.name);

 let someUsers = users.filter(item=> item.id <=3);
 console.log(someUsers.length)
 

 let list = [1, 3, 43, 23, 54, 24];

 function compareNumbers(a, b) {
   if (a > b) return 1;
   if (a === b) return 0;
   if (a < b) return -1;
 }
 
//  list.sort(compareNumbers);
//  console.log(list);

//  let army {
//    minAge = 18,
//    maxAge = 27,
//    canJoin(us) {
//       return us.age => minAge.age && 
//    }
//  }

//mapping real life :()

let map = new Map();
map.set('1', 'str1')
map.set(1, "num1");
map.set(true, "bool");
console.log(map.get('1'));
console.log(map.get(1));
console.log(map.size)


//JSON

let user1 = {
  name: "ABishek",
  age: 21,
  toString() {
    return `{return "${this.name}", age: ${this.age}}`;
  }
};
console.log(user1)

let student1 = {
  name: "Abishek",
  age: 21,
  isAdmin: true,
  courses: ["html", "css", "js"],
  spouse: null
};

let json = JSON.stringify(student1);
console.log(typeof json);
console.log(json);

function pow(x,n){
  let result = 1;
  for(i=1; i<=n; i++){
    result=result*x;
  }
  return result;
}
console.log(pow(2,3))

function pow1(x,n){
  if(n==1){
    return x;
  } else {
    return x*pow1(x,n-1)
  }
}

console.log(pow1(2,3))


function pow2(x,n){
  return (n==1) ? x: pow2(x,n-1);
}

let company = {
  sales: [{
    name: "Abishek",
    salary: 1000 
  }, {
    name: "Abinash",
    salary: 1600
  }],

  development: {
    sites:[{
      name:"abishekn.com.np",
      salary: 2000
    }, {
      name:"abinashneupane.com.np",
      salary: 1500
    }],
    internals: [{
      name: "Abi",
      salary: 2300
    }]
  }
};

function sumSalaries(department){
  if(Array.isArray(department)){
    return department.reduce((prev, current) =>
    prev+current.salary, 0);
  } else {
    let sum =0;
    for (let subdep of Object.values(department)){
      sum=sum+sumSalaries(subdep)
    }
    return sum;
  }
}

console.log(sumSalaries(company))


// Rest parameter and spread Syntax

// function add(...args) {
//   for (let arg of args) sum = sum + arg;
//   return sum;
// }

// console.log(add(1,2,3,4,5))


// Global Object

let func6 = new Function ('a', 'b','return a+b')

console.log(func6(2,4))


// function blinding




























