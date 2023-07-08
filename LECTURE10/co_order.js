"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Antonios Chatzinikolas Georgas
   Date:   
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function () {
  var orderForm = document.forms.orderForm;
  orderForm.elements.orderDate.value = new Date().toDateString();
  orderForm.elements.model.focus();
});

// Calculate the initial cost
