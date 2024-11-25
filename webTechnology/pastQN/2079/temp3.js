/* Write a JavaScript function to validate an email field, password
having length at least 6 and a collection of checkbox of 3 hobbies having at least one of
them to be checked. */
function formValidation() {
	const email = document.getElementById('mail').value;
	const passWord = document.getElementById('pass').value;
	const hobbies = document.getElementById('hobby').innerValue;
	if ( email !== `a-z | A-Z | 1-9 | @ | _ | . | `
		console.log("enter your email correctly");
	if (password.len <= 6) {
		console.log("your password should be greater than 6");
	if(hobbies == null ) {
		console.log("Select at least one hobbies");
}

		
