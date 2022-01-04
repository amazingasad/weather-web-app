const button = document.getElementById('search-button');
const inputField = document.getElementById('input-field');
let cityName = document.getElementById('city-name');
let temperature = document.getElementById('temperature');
let minimumTemperature = document.getElementById('min-temp')
let maximumTemperature = document.getElementById('max-temp')
let weatherCondition = document.getElementById('weather-condition');
let pressure = document.getElementById('atmospheric-pressure');
let imageDiv = document.getElementById('image')
let img = document.createElement('img')
imageDiv.appendChild(img);
function weatherCheck(){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=d26ce3e5a4d91d15e3ae29884459ce3b&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data.name == undefined){
  alert ("Enter a Valid Location name or check your spelling");
}
        cityName.innerText = data.name;
        temperature.innerText = Math.round(data.main.temp);
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        weatherCondition.innerText = data.weather[0].description;
        minimumTemperature.innerText = Math.floor(data.main.temp_min);
        maximumTemperature.innerText = Math.ceil(data.main.temp_max);
        pressure.innerText = data.main.pressure;
        console.log(data);
    })
}
button.addEventListener('click', weatherCheck);
if (inputField.value == "") {
  inputField.value = "Belkuchi";
  weatherCheck();
} else {
  weatherCheck();
}
