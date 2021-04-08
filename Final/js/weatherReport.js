const apiURL_forecast = "api.openweathermap.org/data/2.5/forecast?id=5295903&units=imperial&&APPID=78f51ac9e9dd565af2ff080a1b0ea9d1"
fetch(apiURL)
 .then((response) => response.json())
 .then((gilbert) => {
   console.log(gilbert);

   

   let description = gilbert.weather[0].description;
   for (let i = 1; i < 4; i++ ) {
   document.getElementById('temp' + i).innerHTML = Math.round(gilbert.main.temp);
   document.getElementById('description' + i).innerHTML = description;
}
});