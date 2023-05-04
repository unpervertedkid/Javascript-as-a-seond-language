// add global variable containing XHR object here
let httpRequest = new XMLHttpRequest();

// add get() function here
function get(url, success, fail) {
    httpRequest.open('GET', url);
    httpRequest.onload = function() {
        if (httpRequest.status === 200) {
        successHandler(httpRequest.responseText);
        } else {
            fail(httpRequest.status);
        }
    }
    httpRequest.send();
}

function tempToF(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}

function successHandler(data) {
    const dataObj = JSON.parse(data);
    const weatherDiv = document.querySelector('#weather');
    const weatherFragment = `
        <h1>Weather</h1>
        <h2 class="top">
        <img
            src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
            alt="${dataObj.weather[0].description}"
            width="50"
            height="50"
        />${dataObj.name}
        </h2>
        <p>
        <span class="tempF">${tempToF(dataObj.main.temp)}&deg;</span> | ${dataObj.weather[0].description}
        </p>
    `
    weatherDiv.innerHTML = weatherFragment;
    weatherDiv.classList.remove('hidden');
}

function failHandler(status) {
    console.log(status);
    const weatherDiv = document.querySelector('#weather');
    weatherDiv.classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '25cbf23d50c72194d4f1dbb38fd8e65a';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=los+angeles&APPID=' + apiKey;
    // add get() function call here
    get(url, successHandler, failHandler);
});
