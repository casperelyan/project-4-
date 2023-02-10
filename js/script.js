//code to toggle the password visibility

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

//use user name provided in form to create welcome back message
const form = document.getElementById("formId");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = form.elements["name"].value;
    document.getElementById("welcomeMessage").innerHTML = `Welcome back, ${name}!`;
  });