/**
 * Logs in the user and displays a welcome message.
 */
function login() {
  // Get references to the required DOM elements
  var usernameInput = document.getElementById("username");
  var usernameLabel = document.getElementById("username-label");
  var passwordInput = document.getElementById("password");
  var passwordLabel = document.getElementById("password-label");
  var welcomeDiv = document.getElementById("welcome");
  var loginBtn = document.getElementById("login-button");

  // Hide the username and password inputs and the login button
  usernameInput.style.display = "none";
  usernameLabel.style.display = "none";
  passwordInput.style.display = "none";
  passwordLabel.style.display = "none";
  loginBtn.style.display = "none";

  // Get the username value
  var username = usernameInput.value;

  // Display the welcome message
  var welcomeMessage = "Welcome, " + username + "!";
  welcomeDiv.innerText = welcomeMessage;
}
