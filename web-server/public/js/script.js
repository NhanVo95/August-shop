var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;

  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;

  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  var title_month = document.getElementById("month");
  var title_year = document.getElementById("year");

  var day = document.getElementById("calendar-day");

  day.innerHTML = "";

  title_month.innerHTML = new Date(year, month).toLocaleString("default", {
    month: "long",
  });
  title_year.innerHTML = year;

  var firstDay = new Date(year, month).getDay();

  for (let i = 0; i < 7; i++) {
    cell = document.createElement("span");
    cell.classList.add("day-name");

    cellText = document.createTextNode(days[i]);

    cell.appendChild(cellText);

    day.appendChild(cell);
  }

  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 7; i++) {
      if (i < firstDay && j == 0) {
        cell = document.createElement("div");
        cell.classList.add("day");
        cell.classList.add("day--disabled");

        cell.setAttribute("style", "grid-column:" + (i + 1) + "/ span 1");

        cellText = document.createTextNode(
          daysInMonth(month - 1, year) - firstDay + i + 1
        );

        cell.appendChild(cellText);
      } else if (i >= firstDay && j == 0) {
        cell = document.createElement("div");
        cell.classList.add("day");

        cell.setAttribute("style", "grid-column:" + (i + 1) + "/ span 1");

        cellText = document.createTextNode(i - firstDay + 1);

        cell.appendChild(cellText);
      } else if (
        7 * j - firstDay + i + 1 > daysInMonth(month, year) &&
        i == 0
      ) {
        break;
      } else if (7 * j - firstDay + i + 1 <= daysInMonth(month, year)) {
        cell = document.createElement("div");
        cell.classList.add("day");

        cell.setAttribute("style", "grid-column:" + (i + 1) + "/ span 1");

        cellText = document.createTextNode(7 * j - firstDay + i + 1);

        cell.appendChild(cellText);
      } else {
        cell = document.createElement("div");
        cell.classList.add("day");
        cell.classList.add("day--disabled");

        cell.setAttribute("style", "grid-column:" + (i + 1) + "/ span 1");

        cellText = document.createTextNode(i);

        cell.appendChild(cellText);
      }

      day.appendChild(cell);
    }
  }
  event_in_month = {};
  showEvent(5, month, year, 4);
  showEvent(7, month, year, 5);
}

function showEvent(date, month, year, long) {
  let firstDay = new Date(year, month).getDay();

  let day_of_date = new Date(year, month, date).getDay();

  let row = Math.trunc((date + firstDay) / 7) + 2;
  let column = day_of_date + 1;
  let margin = getmargin(date, long);

  let day = document.getElementById("calendar-day");

  let cell = document.createElement("section");
  cell.classList.add("task");
  cell.classList.add("task--studio");

  cell.setAttribute(
    "style",
    "grid-column: " +
      column +
      " / span " +
      long +
      "; grid-row: " +
      row +
      "; margin-top: " +
      margin +
      "px;"
  );

  cellText = document.createTextNode("08:00 | Projects");
  cell.appendChild(cellText);

  detail = document.createElement("div");
  detail.classList.add("task__detail");
  detail.classList.add("hiden");

  detailh2 = document.createElement("h2");
  detailh2Text = document.createTextNode("Product Checkup 1");
  detailh2.appendChild(detailh2Text);

  detailp = document.createElement("p");
  detailpText = document.createTextNode("15-17th November");
  detailp.appendChild(detailpText);

  detail.appendChild(detailh2);
  detail.appendChild(detailp);
  cell.appendChild(detail);

  day.appendChild(cell);

  console.log(day_of_date);
  if (7 - day_of_date < long) {
    let cell = document.createElement("section");
    cell.classList.add("task");
    cell.classList.add("task--warning");

    cell.setAttribute(
      "style",
      "grid-column: 1" +
        " / span " +
        (long - 7 + day_of_date) +
        "; grid-row: " +
        (row + 1) +
        "; margin-top: " +
        margin +
        "px;"
    );

    cellText = document.createTextNode("08:00 | Projects");
    cell.appendChild(cellText);

    detail = document.createElement("div");
    detail.classList.add("task__detail");
    detail.classList.add("hiden");

    detailh2 = document.createElement("h2");
    detailh2Text = document.createTextNode("Product Checkup 1");
    detailh2.appendChild(detailh2Text);

    detailp = document.createElement("p");
    detailpText = document.createTextNode("15-17th November");
    detailp.appendChild(detailpText);

    detail.appendChild(detailh2);
    detail.appendChild(detailp);
    cell.appendChild(detail);

    day.appendChild(cell);
  }
}

function btnMenuToggle() {
  // Get the container element
  var btnContainer = document.getElementById("menu");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("menu__item");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("menu__item--active");
      current[0].className = current[0].className.replace(
        " menu__item--active",
        ""
      );
      this.className += " menu__item--active";

      if (findWord("menu-personal", this.className)) {
        console.log("menu-personal");
      } else if (findWord("menu-register-event", this.className)) {
        console.log("menu-register-event");
      } else {
        console.log("all");
      }
    });
  }
}

function btnToggle() {
  // Get the container element
  var btnContainer = document.getElementById("toggle");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("toggle__option");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("toggle__option--selected");
      current[0].className = current[0].className.replace(
        " toggle__option--selected",
        ""
      );
      this.className += " toggle__option--selected";

      if (findWord("studio", this.className)) {
        console.log("studio");
      } else if (findWord("photo", this.className)) {
        console.log("photo");
      } else if (findWord("video", this.className)) {
        console.log("video");
      } else if (findWord("livestream", this.className)) {
        console.log("livestream");
      } else {
        console.log("all");
      }
    });
  }
}

function findWord(word, str) {
  return str.split(" ").some(function (w) {
    return w === word;
  });
}

function getmargin(date, long) {
  var margin;
  if (typeof event_in_month[date] == "undefined") {
    margin = 35;
    for (let i = 0; i < long; i++) {
      event_in_month[date + i] = { a: true };
    }
  } else if (
    typeof event_in_month[date].a == "undefined" ||
    typeof event_in_month[date].a == "null"
  ) {
    margin = 35;
    for (let i = 0; i < long; i++) {
      if (
        typeof event_in_month[date + i] == "undefined" ||
        typeof event_in_month[date + i] == "null"
      ) {
        event_in_month[date + i] = { a: true };
      } else {
        event_in_month[date + i] = Object.assign(event_in_month[date + i], {
          a: true,
        });
      }
    }
  } else if (
    typeof event_in_month[date].b == "undefined" ||
    typeof event_in_month[date].b == "null"
  ) {
    margin = 72;
    for (let i = 0; i < long; i++) {
      if (
        typeof event_in_month[date + i] == "undefined" ||
        typeof event_in_month[date + i] == "null"
      ) {
        event_in_month[date + i] = { b: true };
      } else {
        event_in_month[date + i] = Object.assign(event_in_month[date + i], {
          b: true,
        });
      }
    }
  } else if (
    typeof event_in_month[date].c == "undefined" ||
    typeof event_in_month[date].c == "null"
  ) {
    margin = 110;
    for (let i = 0; i < long; i++) {
      if (
        typeof event_in_month[date + i] == "undefined" ||
        typeof event_in_month[date + i] == "null"
      ) {
        event_in_month[date + i] = { c: true };
      } else {
        event_in_month[date + i] = Object.assign(event_in_month[date + i], {
          c: true,
        });
      }
    }
  } else if (
    typeof event_in_month[date].d == "undefined" ||
    typeof event_in_month[date].d == "null"
  ) {
    margin = 148;
    for (let i = 0; i < long; i++) {
      if (
        typeof event_in_month[date + i] == "undefined" ||
        typeof event_in_month[date + i] == "null"
      ) {
        event_in_month[date + i] = { d: true };
      } else {
        event_in_month[date + i] = Object.assign(event_in_month[date + i], {
          d: true,
        });
      }
    }
  }

  return margin;
}

// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
