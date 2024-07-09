// Making the game :)

let check = confirm("Are you exited to play a game? ");
if (check) {
    let ans = prompt("So, Please choose: Scissor, papper, rock");
    if(ans) {
        let changeAns = ans.trim().toLowerCase();
        if ( changeAns === "rock" || changeAns === "papper" || changeAns === "siccor"){
            let num = Math.floor(Math.random() *3 + 1)
          let cs =  num === 1 ? "rock" : num === 2 ? "scissor": "papper";
            if(changeAns === "papper" && cs === "rock"){
                alert(`Computer: ${cs} \n Your: ${changeAns} \n. You win. `);
            }
            else if (changeAns === "scissor" && cs === "papper") {
                alert(`Computer: ${cs} \n Your: ${changeAns} \n. You win. `);
            }
            else if (changeAns === "rock" && cs === "scissor"){
                alert(`Computer: ${cs} \n Your: ${changeAns} \n. You win. `);
            }
            else if (changeAns === "scissor" && cs === "rock"){
                alert(`Computer: ${cs} \n Your: ${changeAns} \n. Computer win. `);
            }
            else if (changeAns === "papper" && cs === "scissor"){
                alert(`Computer: ${cs} \n Your: ${changeAns} \n. Computer win. `);
            }
            else if (changeAns === "scissor" && cs === "rock"){
                alert(`Computer: ${cs} \n Your: ${changeAns} \n. Computer win. `);
            }
            else {
                alert("Sorry! Something went wrong! Please try again on latter.")
            }


        }
        else {
            alert("You entered wrong one! Try again.")
        }


        
    }
    else {
        alert("I see, you changed your mind. But no problem.")
    }
}
else {
    alert("Okey! Sure on future. If you are intrested just came back.")
}
