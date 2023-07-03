"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: 
   Date:  

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

// Get the current date
var thisDay = new Date();

// Display the calendar table for the current date
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// Function to create the calendar table
function createCalendar(calDate) {
  var calendarHTML = "<table id=calendar_table>";

  // Add the caption to the calendar table
  calendarHTML += calCaption(calDate);

  // Add the weekday title rows to the calendar table
  calendarHTML += calWeekdayRow();

  // Add the daily rows to the calendar table, highlighting the specified date
  calendarHTML += calDays(calDate);

  calendarHTML += "</table>";

  return calendarHTML;
}

// Function to write the calendar caption
function calCaption(calDate) {
  // Array of month names
  var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month and year from the specified date
  var thisMonth = calDate.getMonth();
  var thisYear = calDate.getFullYear();

  // Create the caption HTML with the month name and year
  return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

// Function to write the weekday title rows
function calWeekdayRow() {
  // Array of weekday names
  var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  var rowHTML = "<tr>";

  // Create the weekday title cells
  for (var i = 0; i < dayName.length; i++) {
    rowHTML += "<th classname='calendar_weekdays'>" + dayName[i] + "</th>";
  }

  rowHTML += "</tr>";

  return rowHTML;
}

// Function to calculate the number of days in a month
function daysInMonth(calDate) {
  // Array of days in each month
  var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Get the year and month from the specified date
  var thisYear = calDate.getFullYear();
  var thisMonth = calDate.getMonth();

  // Adjust the number of days in February for leap years
  if (thisYear % 4 === 0) {
    if (thisYear % 100 != 0 || thisYear % 400 === 0) dayCount[1] = 29;
  }

  return dayCount[thisMonth];
}

// Function to write the daily rows in the calendar table
function calDays(calDate) {
  // Create a new date object for the first day of the month
  var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);

  // Get the weekday index of the first day
  var weekDay = day.getDay();

  var htmlCode = "<tr>";

  // Write empty cells for the days before the first day of the month
  for (var i = 0; i < weekDay; i++) {
    htmlCode += "<td></td>";
  }

  // Get the total number of days in the month
  var totalDays = daysInMonth(calDate);

  // Get the highlighted date
  var highlight = calDate.getDate();

  // Write the daily cells in the calendar table
  for (var i = 1; i <= totalDays; i++) {
    // Set the date to the current iteration
    day.setDate(i);

    // Get the weekday index of the current date
    weekDay = day.getDay();

    // Start a new row if it's Sunday
    if (weekDay === 0) htmlCode += "<tr>";

    // Check if the current date should be highlighted
    if (i === highlight) {
      // Write the cell with the highlighted date and event description
      htmlCode +=
        "<td class='calendar_dates' id='calendar_today'>" +
        "<span class='day-number'>" +
        i +
        "</span>" +
        dayEvent[i] +
        "</td>";
    } else {
      // Write the regular cell with the date and event description
      htmlCode +=
        "<td class='calendar_dates'>" +
        "<span class='day-number'>" +
        i +
        "</span>" +
        dayEvent[i] +
        "</td>";
    }

    // End the row if it's Saturday
    if (weekDay === 6) htmlCode += "</tr>";
  }

  htmlCode += "</tr>";

  return htmlCode;
}

//window.alert(weekDay);
