const arr1 = [1, 2, 3, 1, 2, 3, 4, 5, 2, 3];

const uniqueArray = [...new Set(arr1)];

console.log(uniqueArray);

// No need of parsing

const var1 = +"123";
const var2 = +"ab13";

console.log(typeof var1);
console.log(typeof var2);

const myArray = [1, 2, null, 0, false, true, undefined, 23, 21, 2];
console.log(myArray.filter(Boolean));

// no this

let a, b, c;
a = 1;
b = 2;
c = 3;

//shorthand

let [x, y, z] = [1, 2, 3];
console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);

//Longhand

let abi = 2;
let bha = 3;

let temp = abi;
abi = bha;
bha = temp;
console.log(abi);
console.log(bha);

let bro = "abi";
let mot = "bha";

[bro, mot] = [mot, bro];
console.log(bro);
console.log(mot);

const price = 2000;
const product = "Birthday Cake";

// const obj = { product: product, price: price };
const obj = { product, price };
console.log(obj);

const studentData = {
  name: "Abishek",
  sem: "Fifth",
  dob: "2003-07-31",
};

const { name, sem } = studentData;

console.log(studentData);

//shorthand

if ([1, "one", 2, "two"].includes(3)) {
  console.log("It can find there.");
} else {
  console.log("Sorry i cant find.");
}

// Method to check if they can be found on there or not.

const product1 = {
  name: "Chauchau",
  price: "20",
  brand: "waiwai",
};

console.log("name" in product1);
console.log("value" in product1);

//Double Bitwise NOT Operator

const FloorValue = Math.floor(3.233);
console.log(FloorValue);

const cielValue = Math.ceil(9.9999);
console.log(cielValue);

//shorthand

console.log(~~1.312);
