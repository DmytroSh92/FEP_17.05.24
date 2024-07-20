const URL = "https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=dcac3b2b6114e831afdacc3ce7358245";
const URL_IMG = "http://openweathermap.org/img/w/";

const cityEl = document.getElementById("city");
const currentDataEl = document.getElementById("currentData");
const tempEl = document.getElementById("temp");
const tempLikeEl = document.getElementById("temp-like");
const weatherDescEl = document.getElementById("weather-desc");
const weatherIconEl = document.getElementById("weather-icon");
const windEl = document.getElementById("wind");
const humidityEl = document.getElementById("humidity");
const pressureEl = document.getElementById("pressure");
const refreshButtonEl = document.getElementById("refresh-button");


async function fetchAndProcessData() {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        renderWeatherInfo(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function renderWeatherInfo(data) {
    cityEl.innerHTML = `${data.name} ${data.sys.country}`;
    currentDataEl.innerHTML = getFormatDate();
    tempEl.innerHTML = String(`${kelvinToCelsius(data.main.temp)}\u00B0C`);
    tempLikeEl.innerHTML = String(`${kelvinToCelsius(data.main.feels_like)}\u00B0C`);
    weatherDescEl.innerHTML = `${data.weather[0].main}: ${data.weather[0].description}`;
    weatherIconEl.src = `${URL_IMG}${data.weather[0].icon}.png`;
    windEl.innerHTML = `${data.wind.speed}`;
    humidityEl.innerHTML = `${data.main.humidity}`;
    pressureEl.innerHTML = `${data.main.pressure}`;
}

function getFormatDate() {
    const date = new Date();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const pad = (num) => num.toString().padStart(2, '0');

    return `${dayName} ${monthName} ${pad(day)} ${year} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

fetchAndProcessData();

refreshButtonEl.addEventListener("click", ()=>{
    fetchAndProcessData();
});