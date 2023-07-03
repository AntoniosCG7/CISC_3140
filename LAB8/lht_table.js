"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Antonios Chatzinikolas Georgas
   Date:   7/2/2023
	
*/

// Step 4: Declare the 'thisDay' variable
var thisDay = new Date("August 30, 2018");

// Step 5: Declare the 'tableHTML' variable with initial HTML code
var tableHTML =
  "<table id='eventTable'>\n<caption>Upcoming Events</caption>\n<tr><th>Date</th><th>Event</th><th>Price</th></tr>\n";

// Step 6: Declare the 'endDate' variable
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

// Step 7: Create a for loop to iterate over event dates
for (var i = 0; i < eventDates.length; i++) {
  var eventDate = new Date(eventDates[i]);
  var eventDay = eventDate.toDateString();
  var eventTime = eventDate.toLocaleTimeString();

  if (thisDay <= eventDate && eventDate < endDate) {
    tableHTML += "<tr>\n";
    tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>\n";
    tableHTML += "<td>" + eventDescriptions[i] + "</td>\n";
    tableHTML += "<td>" + eventPrices[i] + "</td>\n";
    tableHTML += "</tr>\n";
  }
}

// Step 9: Add closing </table> tag to 'tableHTML' variable
tableHTML += "</table>";

// Step 10: Set inner HTML of element with ID 'eventList'
document.getElementById("eventList").innerHTML = tableHTML;
