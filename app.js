const button = document.getElementById('search-button');
const inputField = document.getElementById('input-field');

let cityName = document.getElementById('city-name');

let temperature = document.getElementById('temperature');
let weatherCondition = document.getElementById('weather-condition');
let pressure = document.getElementById('atmospheric-pressure');
function weatherCheck(){
    let url = `api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=d26ce3e5a4d91d15e3ae29884459ce3b`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        cityName.innerText = data.name;
        temperature.innerText = data.main.temp;
        weatherCondition.innerText = data.weather[0].main;
        pressure.innerText = data.main.pressure;
        console.log(data.main)
        console.log(inputField.value)
    })
}
button.addEventListener('click', weatherCheck);