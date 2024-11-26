// handling errors.

let number = parseInt(prompt("enter a number"));

try {
  if (number === 0) {
    throw new Error("Cannot divide by zero!");
  }
  let result = 10 / number;
  console.log("Result: " + result); // Display the result of division
} catch (error) {
  console.log("Error: " + error.message); // Handle the division by zero error
}
