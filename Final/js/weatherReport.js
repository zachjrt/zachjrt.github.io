const apiURL_forecast = "https://api.openweathermap.org/data/2.5/onecall?lat=33.3528&lon=-111.7890&units=imperial&&APPID=78f51ac9e9dd565af2ff080a1b0ea9d1"
fetch(apiURL)
 .then((response) => response.json())
 .then((gilfor) => {
   console.log(gilfor);

   

   let description = gilfor.weather[0].description;
   for (let i = 1; i < 4; i++ ) {
   document.getElementById('temp' + i).innerHTML = Math.round(gilfor.main.temp);
   document.getElementById('description' + i).innerHTML = description;
}
});