//code to toggle the password visibility

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

//use user name provided in form to create welcome back message
function showWelcomeMessage() {
  // Get the value of the input field from register page with id "name"
  var name = document.getElementById("name").value;

  // Display the welcome message with the name after user log in 
  document.getElementById("welcomeMessage").innerHTML = "Welcome back, " + name + "!";
}
