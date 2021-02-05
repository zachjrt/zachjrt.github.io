var today = new Date();
var day = today.getDay();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

var monthlist = ["January","February","March","April ","May","June","July", "August", "September", "October", "November", "December"];

document.getElementById("fullDate").innerHTML = daylist[day] + ", " + date + " " + monthlist[month] + " " + year;


function toggleMenu() {
  var x = document.getElementById("navLinks");
  if (x.className === "mobileNo") {
    x.className = "mobileYes";
  } else {
    x.className = "mobileNo";
  }
}