//Lets Create a scissor papper rock!

let computer = " ";
let man = "papper";

if ( computer === "rock" && man === "scissor") {
    ans = "Computer Wins";
}
else if ( man === "rock" && computer === "scissor") {
    ans = "Man wins";
}
else if (computer === "papper" && man ==="rock") {
    ans = "Computer wins. ";
} 
else if (man === "papper" && computer ==="rock") {
    ans = "Man wins. ";
}

else if (man === "scissor" && computer === "papper"){
    ans = "Man Wins";
}

else if (computer === "scissor" && man === "papper"){
    ans = "Computer Wins";
}

else {
    ans = "Tie"
}
console.log(ans)