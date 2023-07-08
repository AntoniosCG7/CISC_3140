// Window load event listener
window.addEventListener("load", function () {
  // Retrieve field values from the query string of the URL
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

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

  var product = document.getElementById("productName").value;
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

  // Event listener for subButton click
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

function runSubmit() {
  validateName();
  validateNumber();
  validateCVC();
}

function validateName() {
  var cardName = document.getElementById("cardHolder");
  if (cardName.validity.valueMissing) {
    cardName.setCustomValidity("Enter the card holder");
  } else {
    cardName.setCustomValidity("");
  }
}

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

function validateCVC() {
  var cardCVC = document.getElementById("cvc");
  var cvcValue = cardCVC.value;
  if (cvcValue.length < 3 || cvcValue.length > 4 || isNaN(cvcValue)) {
    cardCVC.setCustomValidity("Invalid CVC");
  } else {
    cardCVC.setCustomValidity("");
  }
}

function sumDigits(numStr) {
  var digitTotal = 0;
  for (var i = 0; i < numStr.length; i++) {
    digitTotal += parseInt(numStr.charAt(i));
  }
  return digitTotal;
}

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
