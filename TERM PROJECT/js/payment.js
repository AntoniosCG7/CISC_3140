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

  // Event listener for full name input
  document
    .getElementById("full-name")
    .addEventListener("input", validateFullName);

  // Event listener for phone number input
  document
    .getElementById("phone-number")
    .addEventListener("input", validatePhoneNumber);

  // Event listener for address input
  document.getElementById("address").addEventListener("input", validateAddress);

  // Event listener for city input
  document.getElementById("city").addEventListener("input", validateCity);

  // Event listener for state input
  document
    .getElementById("shipping-state")
    .addEventListener("input", validateState);

  // Event listener for shipping ZIP code input
  document
    .getElementById("shipping-zip-code")
    .addEventListener("input", validateShippingZipCode);

  // Event listener for cardHolder input
  document.getElementById("cardHolder").addEventListener("input", validateName);

  // Event listener for cardNumber input
  document
    .getElementById("cardNumber")
    .addEventListener("input", validateNumber);

  // Event listener for expiration month and year
  document
    .getElementById("card-expiry-month")
    .addEventListener("change", validateExpiration);
  document
    .getElementById("card-expiry-year")
    .addEventListener("change", validateExpiration);

  // Event listener for cvc input
  document.getElementById("cvc").addEventListener("input", validateCVC);

  // Event listener for billing ZIP code input
  document
    .getElementById("billing-zip-code")
    .addEventListener("input", validateBillingZipCode);

  // Add event listener for input fields
  var inputFields = document.querySelectorAll(
    "input[required], select[required]"
  );
  inputFields.forEach(function (input) {
    input.addEventListener("input", function () {
      if (input.value.trim() !== "") {
        input.classList.remove("empty");
      } else {
        input.classList.add("empty");
      }
    });
  });
});

/**
 * Runs the submit validation for the form.
 */
function runSubmit() {
  validateFullName();
  validatePhoneNumber();
  validateAddress();
  validateCity();
  validateState();
  validateShippingZipCode();
  validateName();
  validateNumber();
  validateExpiration();
  validateCVC();
  validateBillingZipCode();
}

/**
 * Validates the full name input.
 */
function validateFullName() {
  var fullName = document.getElementById("full-name");
  if (fullName.validity.valueMissing) {
    fullName.setCustomValidity("Please enter your full name.");
  } else {
    fullName.setCustomValidity("");
  }
}

/**
 * Validates the phone number input.
 */
function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phone-number");
  if (phoneNumber.validity.valueMissing) {
    phoneNumber.setCustomValidity("Please enter your phone number.");
  } else if (phoneNumber.validity.patternMismatch) {
    phoneNumber.setCustomValidity(
      "Please enter a valid phone number (10 digits)."
    );
  } else {
    phoneNumber.setCustomValidity("");
  }
}

/**
 * Validates the address input.
 */
function validateAddress() {
  var address = document.getElementById("address");
  if (address.validity.valueMissing) {
    address.setCustomValidity("Please enter your address.");
  } else {
    address.setCustomValidity("");
  }
}

/**
 * Validates the city input.
 */
function validateCity() {
  var city = document.getElementById("city");
  if (city.validity.valueMissing) {
    city.setCustomValidity("Please enter your city.");
  } else {
    city.setCustomValidity("");
  }
}

/**
 * Validates the state input.
 */
function validateState() {
  var state = document.getElementById("shipping-state");
  if (state.validity.valueMissing) {
    state.setCustomValidity("Please select your state.");
  } else {
    state.setCustomValidity("");
  }
}

/**
 * Validates the shipping ZIP code input.
 */
function validateShippingZipCode() {
  var zipCode = document.getElementById("shipping-zip-code");
  if (zipCode.validity.valueMissing) {
    zipCode.setCustomValidity("Please enter your ZIP code for shipping.");
  } else {
    zipCode.setCustomValidity("");
  }
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
 * Validates the expiration month and year inputs.
 */
function validateExpiration() {
  var monthSelect = document.getElementById("card-expiry-month");
  var yearSelect = document.getElementById("card-expiry-year");

  // Check if both the month and year are selected
  if (monthSelect.value === "" || yearSelect.value === "") {
    monthSelect.setCustomValidity("Select both the expiration month and year");
  } else {
    monthSelect.setCustomValidity("");
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
 * Validates the billing ZIP code input.
 */
function validateBillingZipCode() {
  var zipCode = document.getElementById("billing-zip-code");
  if (zipCode.validity.valueMissing) {
    zipCode.setCustomValidity("Please enter your ZIP code for billing.");
  } else {
    zipCode.setCustomValidity("");
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
