// Arrow Function

let funcName = function () {

}

let func = (arg1, arg2 ) => {
    //expression
}

let sum = (a, b) => a+b;

// alert(sum(2,3))

let div = (a,b) => a/b;

// alert(div(9,3))

let pow = n => n**2;

// console.log(pow(4))

let callfunc = () => alert("Hello World!");

// callfunc();

let age = prompt("What is your age?", 18);


let welcome = (age<18)? 
    ()=> console.log("You are denied"):
    ()=> console.log("You are allowed. ");    

// welcome();
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );


function ask(question, yes,no) {
    if (confirm(question)) yes();
    else no();
}

ask (
    "Do you aggree?",
    () => console.log("You aggreed."),
    () => console.log("You denied.")
);