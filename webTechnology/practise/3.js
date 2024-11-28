function createCookie(cname, cvalue, expireDate) {
  var date = new Date();
  date.setTime(date.getTime() + expireDate * 24 * 60 * 60 * 1000);
  var expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";  // Corrected the string concatenation
  console.log("cookie created: " + document.cookie);
}

createCookie("uname", "ram", 4);

