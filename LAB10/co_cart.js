"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Antonios Chatzinikolas Georgas
   Date:   7/6/2023

   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

function formatNumber(val, decimals) {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function formatUSCurrency(val) {
  return val.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

// Event listener for window load event
window.addEventListener("load", function () {
  // Run calcCart() function when the page is loaded
  calcCart();

  // Get the modelQty field in the cart form
  var modelQtyField = document.getElementById("modelQty");

  // Run calcCart() function when the field value is changed
  modelQtyField.addEventListener("change", function () {
    calcCart();
  });

  // Get the group of shipping option buttons
  var shippingOptions = document.getElementsByName("shipping");

  // Add event handler to each shipping option button
  for (var i = 0; i < shippingOptions.length; i++) {
    shippingOptions[i].addEventListener("change", function () {
      calcCart();
    });
  }
});

// Calculate cart function
function calcCart() {
  // Get the modelCost field value and parse it as a number
  var modelCost = parseFloat(document.getElementById("modelCost").value);

  // Get the modelQty field value and parse it as a number
  var modelQty = parseInt(document.getElementById("modelQty").value);

  // Calculate the order cost
  var orderCost = modelCost * modelQty;

  // Display the order cost in the orderCost field formatted as U.S. currency
  document.getElementById("orderCost").value = formatUSCurrency(orderCost);

  // Get the selected shipping option value and parse it as a number
  var selectedShippingOption = parseFloat(
    document.querySelector('input[name="shipping"]:checked').value
  );

  // Calculate the shipping cost
  var shipCost = selectedShippingOption * modelQty;

  // Display the shipping cost in the shippingCost field formatted with thousands separator and two decimal places
  document.getElementById("shippingCost").value = formatNumber(shipCost, 2);

  // Calculate the subtotal
  var subTotal = orderCost + shipCost;

  // Display the subtotal in the subTotal field formatted with thousands separator and two decimal places
  document.getElementById("subTotal").value = formatNumber(subTotal, 2);

  // Calculate the sales tax
  var salesTax = 0.05 * subTotal;

  // Display the sales tax in the salesTax field formatted with thousands separator and two decimal places
  document.getElementById("salesTax").value = formatNumber(salesTax, 2);

  // Calculate the cart total
  var cartTotal = subTotal + salesTax;

  // Display the cart total in the cartTotal field formatted as U.S. currency
  document.getElementById("cartTotal").value = formatUSCurrency(cartTotal);

  // Store the label text of the selected shipping option in the shippingType field
  var selectedShippingLabel = document
    .querySelector('input[name="shipping"]:checked')
    .nextSibling.textContent.trim();
  document.getElementById("shippingType").value = selectedShippingLabel;
}
