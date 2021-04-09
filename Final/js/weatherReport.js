const apiURL_forecast = "https://api.openweathermap.org/data/2.5/onecall?lat=33.3528&lon=-111.7890&units=imperial&&APPID=78f51ac9e9dd565af2ff080a1b0ea9d1"
fetch(apiURL)
 .then((response) => response.json())
 .then((gilfor) => {
   console.log(gilfor);

   
   const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
   let description = gilfor.weather[0].description;
   let x = new Date();
   let n = x.getDay()

   for (let i = 0; i < 3; i++ ) {
   document.getElementById('temp' + i).innerHTML = Math.round(gilfor.main.temp);
   document.getElementById('description' + i).innerHTML = description;
   document.getElementById('day' + i).innerHTML = day[n + i];
}
});