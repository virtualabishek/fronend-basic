// Write a JavaScript function to validate an email field,
// password having length at least 6 and a collection
//  of checkbox of 3 hobbies having at least one of them
// to be checked.

function validateForm() {
  password = document.getElementById("passWord").value;
  email = document.getElementById("emailID").value;
  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email.");
    return false;
  }
  if (password.length < 6) {
    alert("Password should be greater than 6 characters.");
    return false;
  }
  if (
    !document.getElementById("hobby1").checked &&
    !document.getElementById("hobby2").checked &&
    !document.getElementById("hobby3").checked
  ) {
    alert("Please select at least one hobby.");
    return false;
  }
  return true;
}
