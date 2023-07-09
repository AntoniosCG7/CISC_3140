// Calculate Order for Product 1
function calculateProduct1Order() {
  // Get references to the necessary DOM elements for Product 1
  var product1 = document.querySelector("#product1");
  var itemTypeSelect = product1.querySelector(".item-type");
  var qtySelect = product1.querySelector(".qty");
  var dimensionsSelect = product1.querySelector(".dimensions");
  var dimensionsCostInput = product1.querySelector(".dimensionsCost");
  var initialCostInput = product1.querySelector(".initialCost");
  var subtotalInput = product1.querySelector(".subtotal");
  var salesTaxInput = product1.querySelector(".salesTax");
  var totalCostInput = product1.querySelector(".totalCost");
  var orderDateInput = product1.querySelector(".orderDate");

  // Retrieve selected option values and parse them as numbers
  var itemTypePrice = parseFloat(itemTypeSelect.value);
  var dimensionsPrice = parseFloat(dimensionsSelect.value);
  var qty = parseInt(qtySelect.value);

  // Perform calculations for Product 1
  var initialCost = itemTypePrice * qty;
  var dimensionsCost = dimensionsPrice * qty;
  var subtotal = (itemTypePrice + dimensionsPrice) * qty;
  var salesTax = subtotal * 0.08;
  var totalCost = subtotal + salesTax;

  // Update input values with calculated results
  initialCostInput.value = initialCost.toFixed(2);
  dimensionsCostInput.value = dimensionsCost.toFixed(2);
  subtotalInput.value = subtotal.toFixed(2);
  salesTaxInput.value = salesTax.toFixed(2);
  totalCostInput.value = totalCost.toFixed(2);

  // Get the current date and format it as a string
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString();
  orderDateInput.value = formattedDate;
}

// Calculate Order for Product 2
function calculateProduct2Order() {
  // Get references to the necessary DOM elements for Product 2
  var product2 = document.querySelector("#product2");
  var colorSelect = product2.querySelector(".item-type");
  var qtySelect = product2.querySelector(".qty");
  var sizeSelect = product2.querySelector(".size");
  var sizeCost = product2.querySelector(".sizeCost");
  var initialCostInput = product2.querySelector(".initialCost");
  var subtotalInput = product2.querySelector(".subtotal");
  var salesTaxInput = product2.querySelector(".salesTax");
  var totalCostInput = product2.querySelector(".totalCost");
  var orderDateInput = product2.querySelector(".orderDate");

  // Retrieve selected option values and parse them as numbers
  var colorPrice = parseFloat(colorSelect.value);
  var sizePrice = parseFloat(sizeSelect.value);
  var qty = parseInt(qtySelect.value);

  // Perform calculations for Product 2
  var initialCost = colorPrice * qty;
  var sizeTotalCost = sizePrice * qty;
  var subtotal = (colorPrice + sizePrice) * qty;
  var salesTax = subtotal * 0.08;
  var totalCost = subtotal + salesTax;

  // Update input values with calculated results
  initialCostInput.value = initialCost.toFixed(2);
  sizeCost.value = sizeTotalCost.toFixed(2);
  subtotalInput.value = subtotal.toFixed(2);
  salesTaxInput.value = salesTax.toFixed(2);
  totalCostInput.value = totalCost.toFixed(2);

  // Get the current date and format it as a string
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString();
  orderDateInput.value = formattedDate;
}

// Calculate Order for Product 3
function calculateProduct3Order() {
  // Get references to the necessary DOM elements for Product 3
  var product3 = document.querySelector("#product3");
  var colorSelect = product3.querySelector(".item-type");
  var qtySelect = product3.querySelector(".qty");
  var initialCostInput = product3.querySelector(".initialCost");
  var subtotalInput = product3.querySelector(".subtotal");
  var salesTaxInput = product3.querySelector(".salesTax");
  var totalCostInput = product3.querySelector(".totalCost");
  var orderDateInput = product3.querySelector(".orderDate");

  // Retrieve selected option values and parse them as numbers
  var colorPrice = parseFloat(colorSelect.value);
  var qty = parseInt(qtySelect.value);

  // Perform calculations for Product 3
  var initialCost = colorPrice * qty;
  var subtotal = initialCost;
  var salesTax = subtotal * 0.08;
  var totalCost = subtotal + salesTax;

  // Update input values with calculated results
  initialCostInput.value = initialCost.toFixed(2);
  subtotalInput.value = subtotal.toFixed(2);
  salesTaxInput.value = salesTax.toFixed(2);
  totalCostInput.value = totalCost.toFixed(2);

  // Get the current date and format it as a string
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString();
  orderDateInput.value = formattedDate;
}

// Event listeners
document.querySelector("#product1 .item-type").addEventListener("change", calculateProduct1Order);
document.querySelector("#product1 .dimensions").addEventListener("change", calculateProduct1Order);
document.querySelector("#product1 .qty").addEventListener("change", calculateProduct1Order);

document.querySelector("#product2 .item-type").addEventListener("change", calculateProduct2Order);
document.querySelector("#product2 .size").addEventListener("change", calculateProduct2Order);
document.querySelector("#product2 .qty").addEventListener("change", calculateProduct2Order);

document.querySelector("#product3 .item-type").addEventListener("change", calculateProduct3Order);
document.querySelector("#product3 .qty").addEventListener("change", calculateProduct3Order);

// Initial calculation on page load
calculateProduct1Order();
calculateProduct2Order();
calculateProduct3Order();
