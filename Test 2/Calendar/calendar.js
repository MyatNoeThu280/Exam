
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");
// alert(today);

var calendar = document.getElementById("calendar");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var dayHeader = "<tr>";
for (day in days) {
  dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
dayHeader += "</tr>";

// console.log(dayHeader);

document.getElementById("thead-month").innerHTML = dayHeader;

var monthAndYear = document.getElementById("monthAndYear");
// console.log(monthAndYear);
showCalendar(currentMonth, currentYear);


function showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();
    var tbl = document.getElementById("calendar-body");
    console.log(firstDay);
    // console.log(tbl);
    
    tbl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
   
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
      var row = document.createElement("tr");

      for ( var j = 0; j < 7; j++ ) {
        if ( i === 0 && j < firstDay ) {
          cell = document.createElement( "td" );
          cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > daysInMonth(month, year)) {
          break;
        } else {
          cell = document.createElement("td");
          cell.setAttribute("data-date", date);
          cell.setAttribute("data-month", month + 1);
          cell.setAttribute("data-year", year);
          cell.setAttribute("data-month_name", months[month]);
          cell.className = "date-picker";
          cell.innerHTML = "<span>" + date + "</span>";

          if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
            cell.className = "date-picker selected";
          }
          row.appendChild(cell);
          date++;
        }
      }
      tbl.appendChild(row);
    }
}
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
