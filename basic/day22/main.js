console.log("Checking...")

let abishek = {
    name: "Abishek",
    sayHi: function() {
        console.log("Hi ${this.name} !");
    }
};

abishek.sayHi();

let name = "Abishek";

console.log(name.toUpperCase());

console.log(name)

let n = 98.62681874;

console.log(n.toFixed(2));

let str = "Hello";

str.test = 5; // (*)

console.log(str.test);


let num1 = 1e9;

let num2 = 1_00_00_00_000;

console.log(num1);
console.log(num2);

num3 = 0.000001
num4 = 1e-6;
console.log(num3);
console.log(num4);

console.log(0xa);
console.log(0xA);
console.log(0b1111);

num4 = 255;

console.log(num4.toString(16));
console.log(num4.toString(8));
console.log(num4.toString(2));

// Rounding


