
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";

fetch(apiURL)
 .then((response) => response.json())
 .then((town) => {
   console.log(town);
   let description = town.weather[0].description;
   document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
   document.getElementById('temp').innerHTML = Math.round(town.main.temp);
   document.getElementById('humidity').innerHTML = town.main.humidity;
   document.getElementById('speed').innerHTML = Math.round(town.wind.speed);
});


function windchill() {

const temperature = document.getElementById('temp').innerHTML;
const windspeed = document.getElementById('speed').innerHTML;


let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temperature * Math.pow(windspeed, .16));
if (temperature <= 50 && windspeed > 3) {
   windchill = Math.round(windchill) + "°F";
} else {
   windchill = "n/a";
}
document.getElementById('chill').innerHTML = windchill;

}