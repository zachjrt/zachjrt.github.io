const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5295903&units=imperial&&APPID=78f51ac9e9dd565af2ff080a1b0ea9d1"
fetch(apiURL)
 .then((response) => response.json())
 .then((gilbert) => {
   console.log(gilbert);
   let description = gilbert.weather[0].description;
   document.getElementById('temperature').innerHTML = Math.round(gilbert.main.temp);
   document.getElementById('currently').innerHTML = description;
   document.getElementById('humidity').innerHTML = gilbert.main.humidity;
});