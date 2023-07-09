// Window load event listener
window.addEventListener("load", function () {
  // Retrieve field values from the query string of the URL
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  // Set the field values based on the query parameters
  document.getElementById("orderDate").value = urlParams.get("orderDate");
  document.getElementById("productName").value = urlParams.get("productName");
  document.getElementById("qty").value = urlParams.get("qty");
  document.getElementById("item-type").value = urlParams
    .get("item-type")
    .split(",")[1]
    .trim();
  document.getElementById("initialCost").value = urlParams.get("initialCost");
  document.getElementById("subtotal").value = urlParams.get("subtotal");
  document.getElementById("salesTax").value = urlParams.get("salesTax");
  document.getElementById("totalCost").value = urlParams.get("totalCost");

  // Get the selected product
  var product = document.getElementById("productName").value;

  // Set additional field values based on the selected product
  if (product === "World Map Push Pin") {
    document.getElementById("dimensions").value = urlParams
      .get("dimensions")
      .split(",")[1]
      .trim();
    document.getElementById("dimensionsCost").value =
      urlParams.get("dimensionsCost");
  } else if (product === "World Map Shirt") {
    document.getElementById("dimensions").value = urlParams
      .get("size")
      .split(",")[1]
      .trim();
    document.getElementById("dimensionsCost").value = urlParams.get("sizeCost");
  }

  // Event listener for submit button click
  document.getElementById("subButton").addEventListener("click", runSubmit);

  // Event listener for cardHolder input
  document.getElementById("cardHolder").addEventListener("input", validateName);

  // Event listener for cardNumber input
  document
    .getElementById("cardNumber")
    .addEventListener("input", validateNumber);

  // Event listener for cvc input
  document.getElementById("cvc").addEventListener("input", validateCVC);
});

/**
 * Runs the submit validation for the form.
 */
function runSubmit() {
  validateName();
  validateNumber();
  validateCVC();
}

/**
 * Validates the card holder name input.
 */
function validateName() {
  var cardName = document.getElementById("cardHolder");
  if (cardName.validity.valueMissing) {
    cardName.setCustomValidity("Enter the card holder");
  } else {
    cardName.setCustomValidity("");
  }
}

/**
 * Validates the card number input.
 */
function validateNumber() {
  var cardNumber = document.getElementById("cardNumber");
  if (cardNumber.validity.valueMissing) {
    cardNumber.setCustomValidity("Enter a card number");
  } else if (!luhn(cardNumber.value.replace(/\D/g, ""))) {
    cardNumber.setCustomValidity("Invalid card number");
  } else {
    cardNumber.setCustomValidity("");
  }
}

/**
 * Validates the CVC input.
 */
function validateCVC() {
  var cardCVC = document.getElementById("cvc");
  var cvcValue = cardCVC.value;
  if (cvcValue.length < 3 || cvcValue.length > 4 || isNaN(cvcValue)) {
    cardCVC.setCustomValidity("Invalid CVC");
  } else {
    cardCVC.setCustomValidity("");
  }
}

/**
 * Sums the digits of a number string.
 *
 * @param {string} numStr - The number string.
 * @returns {number} The sum of the digits.
 */
function sumDigits(numStr) {
  var digitTotal = 0;
  for (var i = 0; i < numStr.length; i++) {
    digitTotal += parseInt(numStr.charAt(i));
  }
  return digitTotal;
}

/**
 * Performs the Luhn algorithm to validate a card number.
 *
 * @param {string} cardNumber - The card number to validate.
 * @returns {boolean} Whether the card number is valid.
 */
function luhn(cardNumber) {
  var string1 = "";
  var string2 = "";

  // Remove non-digit characters from the card number
  cardNumber = cardNumber.replace(/\D/g, "");

  // Retrieve the odd-numbered digits
  for (var i = cardNumber.length - 1; i >= 0; i -= 2) {
    string1 += cardNumber.charAt(i);
  }
  // Retrieve the even-numbered digits and double them
  for (var i = cardNumber.length - 2; i >= 0; i -= 2) {
    string2 += 2 * cardNumber.charAt(i);
  }

  // Return whether the sum of the digits is divisible by 10
  return sumDigits(string1 + string2) % 10 === 0;
}
