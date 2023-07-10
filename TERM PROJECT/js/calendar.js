/**
 * Calculates the number of days in a month.
 *
 * @param {number} month - The month (0-11) for which to calculate the number of days.
 * @param {number} year - The year for which to calculate the number of days.
 * @returns {number} The number of days in the specified month and year.
 */
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

/**
 * Writes the weekday title rows for the calendar table.
 *
 * @returns {string} The HTML markup for the weekday title rows.
 */
function writeWeekdayTitleRows() {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let row = "<tr class='weekday-row'>";
  for (let day of days) {
    row += `<th class='weekday'>${day}</th>`;
  }
  row += "</tr>";
  return row;
}

/**
 * Writes the daily rows in the calendar table for the specified month and year.
 *
 * @param {number} month - The month (0-11) for which to generate the daily rows.
 * @param {number} year - The year for which to generate the daily rows.
 * @returns {string} The HTML markup for the daily rows in the calendar table.
 */
function writeDailyRows(month, year) {
  let firstDay = new Date(year, month).getDay();
  let days = daysInMonth(month + 1, year);

  let tableRows = "";
  let dayCount = 1;
  let numOfWeeks = Math.ceil((days + firstDay) / 7);

  for (let i = 0; i < numOfWeeks; i++) {
    tableRows += "<tr>";
    for (let j = 0; j < 7; j++) {
      if (dayCount > days || (i === 0 && j < firstDay)) {
        tableRows += "<td>&nbsp;</td>";
      } else {
        let today = new Date();
        let isToday =
          today.getDate() === dayCount &&
          today.getMonth() === month &&
          today.getFullYear() === year;

        // Format the date and month in 'yyyy-mm-dd' format
        let formattedMonth = (month + 1).toString().padStart(2, "0");
        let formattedDay = dayCount.toString().padStart(2, "0");
        let eventDate = `${year}-${formattedMonth}-${formattedDay}`;

        let hasEvent = events.hasOwnProperty(eventDate);
        tableRows += `<td class='day ${isToday ? "today" : ""} ${
          hasEvent ? "event" : ""
        }'>
                    <div class='day-number'>${dayCount}</div>
                    <div class='event-description'>${
                      hasEvent ? events[eventDate] : ""
                    }</div>
                </td>`;
        dayCount++;
      }
    }
    tableRows += "</tr>";
  }
  return tableRows;
}

/**
 * Writes the calendar caption for the specified month and year.
 *
 * @param {number} month - The month (0-11) for which to generate the calendar caption.
 * @param {number} year - The year for which to generate the calendar caption.
 * @returns {string} The HTML markup for the calendar caption.
 */
function writeCalendarCaption(month, year) {
  var monthNames = [
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
  return `<caption>${monthNames[month]} ${year}</caption>`;
}

/**
 * Generates the calendar table for the specified month and year.
 *
 * @param {number} month - The month (0-11) for which to generate the calendar table.
 * @param {number} year - The year for which to generate the calendar table.
 * @returns {string} The HTML markup for the calendar table.
 */
function generateCalendarTable(month, year) {
  let calendarTable = "<table id='calendarTable'>";
  calendarTable += writeCalendarCaption(month, year);
  calendarTable += writeWeekdayTitleRows();
  calendarTable += writeDailyRows(month, year);
  calendarTable += "</table>";
  return calendarTable;
}

// Add a window.onload event handler to make sure the DOM is fully loaded before manipulating it.
window.onload = function () {
  // Set the innerHTML of the element with id "calendar" to the generated calendar table
  document.getElementById("calendar").innerHTML = generateCalendarTable(
    new Date().getMonth(),
    new Date().getFullYear()
  );
};
