import { man, hero } from "./sample";
class Man {
  constructor(name) {
    this.brand = name;
  }
  detail() {
    return `Hi! i am car and my brand is: ${this.brand}`;
  }
}

class Model extends Man {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.detail() + `How you doing?, ${this.model}`;
  }
}

const newMan = new Model("Honda", "hurur");
console.log("====================================");
console.log(newMan.show());
console.log("====================================");

// arrrow function

callMe = () => {
  return "Hello World";
};

console.log("====================================");
console.log(callMe());
console.log("====================================");

// map array.

const myFridge = ["Apple", "Orange", "Meat", "Milk", "Lemon", "Cold Drinks"];

const myItems = myFridge.map((item) => item);

console.log(myItems);
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

// console.log(calculate());

const numOne = [1, 2, 3];
const numTwo = [4, 5, 6];

const combineNum = [...numOne, ...numTwo];
console.log(combineNum);

const [one, two, ...rest] = numbers;

const man1 = man;
const hero2 = hero;

console.log(man1);
console.log(hero2);
