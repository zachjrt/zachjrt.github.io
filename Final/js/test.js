const requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.3528&lon=-111.7890&units=imperial&&APPID=78f51ac9e9dd565af2ff080a1b0ea9d1';


fetch(requestURL)
  .then(res => res.json())
  .then(data => console.log(data))