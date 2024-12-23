let str = "";
for (let i = 0; i < 5; i++) {
  str += "Hello ";
}

console.log(str);

const str1 = "Hello ".repeat(5);
console.log(str1);

function addMe(a, b, c) {
  const sum = a + b + c;
  return sum;
}

console.log(addMe(1, 2, 3, 4));
const hero = addMe.length;
console.log(hero);

// Merge two arrays

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

// Finding max and min withoud using loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Math.min(...numbers));

console.log(Math.pow(2, 3));
// Shoryhand
console.log(2 ** 3);

const arr3 = [1, 4, 2, 5, 6, 3, 2, 1, 4, 6, 3, 2, 1, 4, 5, 2, 2, 2, 1];
console.log(arr3);
const uniqueArray = [...new Set(arr3)];
console.log(uniqueArray);
console.log();
console.log();
console.log();
console.log();
console.log();
