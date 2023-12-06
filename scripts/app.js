// navigator.geolocation.getCurrentPosition(success, errorFunc);

// {
//   coords: {
//     latitude: 32.1234;
//     longitude: 13.1234;
//   }
// }

// let lat;
// let lon;

// function success(position) {
//   console.log("our Latitude: " + position.coords.latitude);
//   console.log("our longitude: " + position.coords.longitude);
//   lat = position.coords.latitude;
//   lon = position.coords.longitude;
//   const base = `https://api.openweathermap.org/data/2.5/weatherlat=${lat}&lon=${lon}&appid=${api}&units=metric`;
//   // console.log(base);
//   // fetch(base).then((response) => {
//   //   return response.json();
//   // });
//   fetch(base)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const { temp } = data.main;
//     const place = data.name;
//     const { description, icon } = data.weather[0];
//     const { sunrise, sunset } = data.sys;
//   });
// };

// function errorFunc(error) {
//   console.log(error.message);
// }

// const APIKey = "f86e3df09941ea6ed9ee289a745f4331";

// let searchInput = document.getElementById("searchInput");
// let searchBtn = document.getElementById("searchBtn");
// let cityName = document.getElementById("cityName");

// const error = document.getElementById("error");
// const APIKey = "f86e3df09941ea6ed9ee289a745f4331";
// const apiCurrentUrl = "https://openweathermap.org/current#name";
// const api5NameUrl = "https://openweathermap.org/current#name";

// // async function searchWeather(city){

// //     try{
// //         const response = await fetch(apiCurrentUrl + city + " ");

// //     }catch(error){
// //     }
// // }

// // async function apiCall2() {
// //   const promise = await fetch(
// //     `http://api.openweathermap.org/geo/1.0/direct?q= '${searchInput}&limit=${limit}&appid=${APIKey}`
// //   );
// //   const data = await promise.json();
// //   console.log(data);
// //   cityName, (src = data);
// // }
// // apiCall2();

// async function searchWeather() {
//   try {
//     const cityInputtedByUser = document.getElementById("cityInput").value;
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${apiKey}&units=${units}&cnt=${cnt}`
//     );
//     const data = await response.json();

//     if (data.cod == "400" || data.cod == "404") {
//       error.innerHTML = `Not valid city. Please input another city`;
//       return;
//     }
//     data.list.forEach((hourlyWeatherData) => {
//       const hourlyWeatherDataDiv = createWeatherDescription(hourlyWeatherData);
//       weatherContainer.appendChild(hourlyWeatherDataDiv);
//     });

//     cityName.innerHTML = `Hourly Weather for ${data.cityName.name}`;
//   } catch (error) {
//     console.log(error);
//   }
// }
// // async function apiCall(){
// //   const promise = await fetch('https://openweathermap.org/current#name')
// //   const data = await promise.json();
// //   console.log(data.results[0].picture.large);
// //   cityName,src = data.results[0].picture.large
// // }
// // apiCall();

// // async function logMovies() {
// //   const response = await fetch("https://openweathermap.org/current#name");
// //   const movies = await response.json();
// //   console.log(movies);
// // }

// // handleSubmit(){
// //     var city = this.state.city;
// //     var url = api5NameUrl+ apiKey + city;
// //     console.log(url);
// //     fetch(url, {
// //       method: 'GET',
// //       mode: "cors"
// //     }).then((res) => {
// //       var resJson = JSON.parse(res);
// //       console.log(resJson);
// //       return resJson;
// //     }).then((resJson) => {

// //     }).catch((err) => {
// //       console.log("error");
// //     });
// //   }

// // searchBtn.addEventListener('click', function (e){
// //     let value = e.target.value
// //     if(value && value.trim().l)

// // });

// function GetData() {
//   fetch("").then();
// }

const api = "f86e3df09941ea6ed9ee289a745f4331";

const iconImg = document.getElementById("weather-icon");
const loc = document.querySelector("#location");
const tempC = document.querySelector(".c");
const tempF = document.querySelector(".f");
const desc = document.querySelector(".desc");
const sunriseDOM = document.querySelector(".sunrise");
const sunsetDOM = document.querySelector(".sunset");

let data;
let long;
let lat;


// // Accesing Geolocation of User
async function getData() {
  // window.addEventListener('load', () => {
// function getData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
      
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const temp = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { sunrise, sunset } = data.sys;

          // const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;

          // Converting Epoch(Unix) time to GMT
          const sunriseGMT = new Date(sunrise * 1000);
          const sunsetGMT = new Date(sunset * 1000);

          // Interacting with DOM to show data
          // iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${temp.toFixed(2)} °C`;
          tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
          sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
          sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        });
    });
  }

  })
;

// async function getData(){
//   const promise = await fetch(data);
// const data = await promise.json();

// }

// let temp = document.getElementById("temp");

// async function getStudent(){

//   // navigator.geolocation.getCurrentPosition(position) => {
//   // long = position.coords.longitude;
//   // lat = position.coords.latitude;
//   // const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`);
//   // const data = await promise.json();

//   const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37&lon=121&appid=${api}&units=metric`);
//   const data = await promise.json();

//   console.log(data.main.temp)
//   temp.textContent = data.main.temp;

//   // console.log(data.main)
//   // temp.textContent = data.main;
  
//   // console.log(data.name)
//   // place.textContent = data.name;



// }
