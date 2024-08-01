/* message = prompt("In which year Abi borned?", "DOB")
if(message == 2003) {
    console.log("You are right!");
} */

/* check = prompt("In which sem you are?")

if(check == 1) {
    alert("Oho! Still 7 more sem.");
}
else if(check == 2){
    alert("Still 6 more left!");
}
else if(check == 3){
    alert("Still 5 more left!");
}

else {
    alert("I am bored! Calculate yourself, bro.")
} *//* 
let access;
check = prompt("how old are you? ", 18);
if (check >= 18) {
    access = true;
}
else {
    access = false;
}

alert(access) */

/* check = prompt("how old are you? ", 18);

let result = (check>18) ? true : false;

alert(result)
 */

/* age = prompt ("Enter your age! ")

let message = (age<3) ? 'Hey Baby' :
(age <16) ? 'Hey Teeneger' :
(age <60) ? 'Hey shoulder. ' :
'Hey Grandparents!';

alert(message) */

//Question

/* qns = prompt (`What is the “official” name of JavaScript?’`);

if(qns == "ECMAScript") {
    alert("Right!");
}
else {
    alert(`You don’t know? ECMAScript`)
}

 */

/* Using if..else, write the code which gets a number via prompt and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.

In this task we assume that the input is always a number.
 */

/* getNumber = prompt("Enter a number, bro!");
if(getNumber>0){
    alert(1);
}
else if (getNumber == 0){
    alert(0);
}
else {
    alert(-1)
} */


/* 
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

 */

login = prompt ("Enter your role.")

let message = (login=='Employee') ? "Hello" :
        (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No Login!' :
        '';

console.log(message);