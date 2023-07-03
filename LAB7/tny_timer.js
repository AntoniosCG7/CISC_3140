/*
New Perspectives on HTML5 and CSS3, 7th Edition
Tutorial 9
Review Assignment

Event Timer
Author: Antonios Chatzinikolas Georgas
Date:   6/272023
*/

// Apply strict usage of JavaScript code
("use strict");

// Define the showClock() function
function showClock() {
  // Declare a variable for May 19, 2018, at 9:31:27 a.m.
  var thisDay = new Date();

  // Convert the date and time to local conventions
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();

  // Write the date and time to the currentTime element
  document.getElementById("currentTime").innerHTML =
    "<span>" + localDate + "</span><span>" + localTime + "</span>";

  // Call the nextJuly4() function using thisDay as the parameter
  var j4Date = nextJuly4(thisDay);

  // Set the hours of j4Date to 9 p.m.
  j4Date.setHours(21); // 21 represents 9 p.m. in 24-hour format

  // Calculate the time difference between j4Date and the current date
  var timeDiff = j4Date - thisDay;
  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  // Update the countdown clock elements
  document.getElementById("dLeft").textContent = Math.floor(days);
  document.getElementById("hLeft").textContent = Math.floor(hours % 24);
  document.getElementById("mLeft").textContent = Math.floor(minutes % 60);
  document.getElementById("sLeft").textContent = Math.floor(seconds % 60);
}

// Call the showClock() function
// showClock();

// Run the showClock() function every second
setInterval(showClock, 1000);

function nextJuly4(currentDate) {
  var cYear = currentDate.getFullYear();
  var jDate = new Date("July 4, 2018");
  jDate.setFullYear(cYear);
  if (jDate - currentDate < 0) jDate.setFullYear(cYear + 1);
  return jDate;
}
