navigator.geolocation.getCurrentPosition(success, errorFunc);

{
  coords: {
    latitude: 32.1234;
    longitude: 13.1234;
  }
}

let lat;
let lon;

function success(position) {
  console.log("our Latitude: " + position.coords.latitude);
  console.log("our longitude: " + position.coords.longitude);
  lat = position.coords.latitude;
  lon = position.coords.longitude;
}

function errorFunc(error) {
  console.log(error.message);
}

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let cityName = document.getElementById("cityName");

const error = document.getElementById("error");
const APIKey = "f86e3df09941ea6ed9ee289a745f4331";
const apiCurrentUrl = "https://openweathermap.org/current#name";
const api5NameUrl = "https://openweathermap.org/current#name";

// async function searchWeather(city){

//     try{
//         const response = await fetch(apiCurrentUrl + city + " ");

//     }catch(error){
//     }
// }

// async function apiCall2() {
//   const promise = await fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q= '${searchInput}&limit=${limit}&appid=${APIKey}`
//   );
//   const data = await promise.json();
//   console.log(data);
//   cityName, (src = data);
// }
// apiCall2();

async function searchWeather() {
  try {



    const cityInputtedByUser = document.getElementById('cityInput').value;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${apiKey}&units=${units}&cnt=${cnt}`
    );
    const data = await response.json();

    if (data.cod == "400" || data.cod == "404") {
      error.innerHTML = `Not valid city. Please input another city`;
      return;
    }
    data.list.forEach((hourlyWeatherData) => {
      const hourlyWeatherDataDiv = createWeatherDescription(hourlyWeatherData);
      weatherContainer.appendChild(hourlyWeatherDataDiv);
    });

    cityName.innerHTML = `Hourly Weather for ${data.cityName.name}`;
  } catch (error) {
    console.log(error);
  }
}

// async function apiCall(){
//   const promise = await fetch('https://openweathermap.org/current#name')
//   const data = await promise.json();
//   console.log(data.results[0].picture.large);
//   cityName,src = data.results[0].picture.large
// }
// apiCall();

// async function logMovies() {
//   const response = await fetch("https://openweathermap.org/current#name");
//   const movies = await response.json();
//   console.log(movies);
// }

// handleSubmit(){
//     var city = this.state.city;
//     var url = api5NameUrl+ apiKey + city;
//     console.log(url);
//     fetch(url, {
//       method: 'GET',
//       mode: "cors"
//     }).then((res) => {
//       var resJson = JSON.parse(res);
//       console.log(resJson);
//       return resJson;
//     }).then((resJson) => {

//     }).catch((err) => {
//       console.log("error");
//     });
//   }

// searchBtn.addEventListener('click', function (e){
//     let value = e.target.value
//     if(value && value.trim().l)

// });

function GetData() {
  fetch("").then();
}
