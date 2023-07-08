// Function to calculate the number of days in a month.
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// Function to write the weekday title rows.
function writeWeekdayTitleRows() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let row = "<tr class='weekday-row'>";
  for (let day of days) {
    row += `<th class='weekday'>${day}</th>`;
  }
  row += "</tr>";
  return row;
}

// Function to write the daily rows in the calendar table.
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

        // Ensuring the date and month are in the 'yyyy-mm-dd' format
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

// Function to write the calendar caption.
function writeCalendarCaption(month, year) {
  const monthNames = [
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

// Function to generate the calendar table.
function generateCalendarTable(month, year) {
  let calendarTable = "<table id='calendarTable'>";
  calendarTable += writeCalendarCaption(month, year);
  calendarTable += writeWeekdayTitleRows();
  calendarTable += writeDailyRows(month, year);
  calendarTable += "</table>";
  return calendarTable;
}

// Add a window.onload event handler to make sure the DOM is fully loaded before we try to manipulate it.
window.onload = function () {
  document.getElementById("calendar").innerHTML = generateCalendarTable(
    new Date().getMonth(),
    new Date().getFullYear()
  );
};
