// Function to display the multiplication table of a given number
function displayMultiplicationTable(number) {
    console.log(`Multiplication Table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

// Call the function to display the multiplication table for the number 9
displayMultiplicationTable(9);

