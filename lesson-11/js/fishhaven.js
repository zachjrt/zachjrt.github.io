const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
       if (towns[i].name == 'Fish Haven') {
        let events = towns[i].events;
        for (let i=0; i < events.length; i++) {
        let event = document.createElement('p');
        event.innerHTML = events[i];
        document.querySelector('.town-events').appendChild(event);
        }
    }
   }
});


const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1"

fetch(apiURL_forecast)
   .then(response => response.json())
   .then((jsObject) => {
       console.log(jsObject);
       const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

  console.log(forecastData);

  const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

   let forecastday = 0;
  forecastData.forEach(forecast => {
    let x = new Date(forecast.dt_txt);
   document.getElementById('temperature'+(forecastday+1)).textContent = Math.round(forecast.main.temp) + ' °F';
   document.getElementById('img'+(forecastday+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
   document.getElementById('img'+(forecastday+1)).alt = forecast.weather[0].description
  document.getElementById('forecastday'+(forecastday+1)).textContent = weekday[x.getDay()];
  forecastday++;	  
  });
});


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";

fetch(apiURL)
 .then((response) => response.json())
 .then((town) => {
   console.log(town);
   let description = town.weather[0].description;
   document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
   document.getElementById('temp').innerHTML = Math.round(town.main.temp);
   document.getElementById('humidity').innerHTML = town.main.humidity;
   document.getElementById('speed').innerHTML = Math.round(town.wind.speed);
   windchill();
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