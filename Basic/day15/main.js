// Javascript Object Notation

//Lets create one object!

const myObj = {
    name: "Abishek",
    hobbies: ["code", "read", "coffee"],
    hello: function() {
        console.log(`Hello! This is ${this.name}`);
    }
};

console.log(myObj)
console.log(myObj.name)
myObj.hello()
console.log(typeof(myObj))


const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
  

