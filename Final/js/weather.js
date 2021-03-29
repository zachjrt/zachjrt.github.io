const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5295903&units=imperial&&APPID=78f51ac9e9dd565af2ff080a1b0ea9d1"
fetch(apiURL)
 .then((response) => response.json())
 .then((town) => {
   console.log(town);
   let description = town.weather[0].description;
   document.getElementById('temperature').innerHTML = Math.round(town.main.temp);
   document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
   document.getElementById('humidity').innerHTML = town.main.humidity;
   windchill();
});