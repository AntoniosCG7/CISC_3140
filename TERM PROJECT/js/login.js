function login() {
  var usernameInput = document.getElementById("username");
  var usernameLabel = document.getElementById("username-label");
  var passwordInput = document.getElementById("password");
  var passwordLabel = document.getElementById("password-label");
  var welcomeDiv = document.getElementById("welcome");
  var loginBtn = document.getElementById("login-button");

  // Hide the username and password inputs
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

// Calculate the total amount based on the selected items
// function calculateTotal() {
//   var item1Price = 10; // Price of item 1
//   var item2Price = 20; // Price of item 2
//   var item1Checkbox = document.getElementById("item1Checkbox");
//   var item2Checkbox = document.getElementById("item2Checkbox");
//   var taxRate = 0.08; // 8% tax rate

//   var totalPrice = 0;

//   if (item1Checkbox.checked) {
//     totalPrice += item1Price;
//   }
//   if (item2Checkbox.checked) {
//     totalPrice += item2Price;
//   }

//   var tax = totalPrice * taxRate;
//   var totalAmount = totalPrice + tax;

//   document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
//   document.getElementById("tax").innerText = tax.toFixed(2);
//   document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
// }

// function validateForm() {
//   var nameInput = document.getElementById("name");
//   var cardNumberInput = document.getElementById("cardNumber");
//   var expirationInput = document.getElementById("expiration");
//   var cvcInput = document.getElementById("cvc");

//   if (nameInput.value === "") {
//     nameInput.style.color = "red";
//     alert("Please enter your name.");
//     return false;
//   }

//   if (cardNumberInput.value === "") {
//     cardNumberInput.style.color = "red";
//     alert("Please enter your credit card number.");
//     return false;
//   }

//   if (expirationInput.value === "") {
//     expirationInput.style.color = "red";
//     alert("Please enter the expiration date.");
//     return false;
//   }

//   if (cvcInput.value === "") {
//     cvcInput.style.color = "red";
//     alert("Please enter the CVC number.");
//     return false;
//   }

//   return true;
// }

// function setInputColor(inputId) {
//   var input = document.getElementById(inputId);
//   input.style.color = "white";
// }
