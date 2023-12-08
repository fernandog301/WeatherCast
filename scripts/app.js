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
//   const data = fecth(`https://api.openweathermap.org/data/2.5/weatherlat=${lat}&lon=${lon}&appid=${api}&units=metric`);
//   console.log(data);
// fetch(data).then((response) => {
// return response.json();
//   }.then
//   tempF.t;
// };

// function errorFunc(error) {
//   console.log(error.message);
// }

// });
// fetch(base)
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const { temp } = data.main;
//   const place = data.name;
//   const { description, icon } = data.weather[0];
//   const { sunrise, sunset } = data.sys;

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

// let data;
// let long;
// let lat;

// async function getStudent(){

//   navigator.geolocation.getCurrentPosition(position)
//   long = position.coords.longitude;
//   lat = position.coords.latitude;
// //   const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
//   fetch(base)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//   const temp = data.main;
//   const place = data.name;})

//   const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`);
//   const data = await promise.json();
//   console.log(data.main.temp)
//   temp.textContent = data.main.temp;

//   }
// }

const api = "f86e3df09941ea6ed9ee289a745f4331";

const iconImg = document.getElementById("weather-icon");
const loc = document.querySelector("#location");
const tempF = document.querySelector(".f");
const desc = document.querySelector(".desc");
const Day = document.querySelector(".sunrise");
const time = document.querySelector(".sunset");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let cityOutput;
let tempMin = document.getElementById("tempMin");
let tempMax = document.getElementById("tempMax");
let high = document.getElementById("high");
let low = document.getElementById("low");
let textA = document.getElementById("textA");
let textB = document.getElementById("textB");
let textC = document.getElementById("textC");
let textD = document.getElementById("textD");
let textE = document.getElementById("textE");
let day1Icon = document.getElementById("day1Icon")
let day2Icon = document.getElementById("day2Icon")
let day3Icon = document.getElementById("day3Icon")
let day4Icon = document.getElementById("day4Icon")
let day5Icon = document.getElementById("day5Icon")


navigator.geolocation.getCurrentPosition(success, errorFunc);

function success(position) {
  console.log("our Latitude: " + position.coords.latitude);
  console.log("our longitude: " + position.coords.longitude);
  long = position.coords.longitude;
  lat = position.coords.latitude;
  loc.innerText = "loading";

  fiveDayGeoWeatherCall();
  currentGeoWeatherCall();
  // convertToLocalTime(dt)
  // createWeatherDescription(weatherData)
  
  // fiveDayForecast();
  
}

function convertToLocalTime(dt) {

  // Create a new Date object by multiplying the Unix timestamp by 1000 to convert it to milliseconds
  // Will produce a time in the local timezone of user's computer
  const date = new Date(dt * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours() % 12 || 12).padStart(2, '0'); // Convert 24-hour to 12-hour format
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const period = date.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM/PM

  // Formatted date string in the format: YYYY-MM-DD hh:mm:ss AM/PM
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${period}`;

}

let description = document.getElementById("description");
function createWeatherDescription(weatherData) {
  const { main, dt } = weatherData;

  const convertedDateAndTime = convertToLocalTime(dt);

description.innerHTML = ` ${convertedDateAndTime.substring(10)} - ${convertedDateAndTime.substring(5, 10)} `;
return description;
}

async function fiveDayGeoWeatherCall() {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${api}&units=imperial`
  );
  const data = await promise.json();

  console.log(data.list)

    let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  
  let day1 = new Date(data.list[0].dt_txt);
  console.log(day1.toString().slice(0,3) + "urday")

  // let day1Day = day1;

  day1Day.innerText = dayNames[1];
  day1Icon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  console.log(data.list[0].main.temp_max, data.list[0].main.temp_min);
  high = Math.round(data.list[0].main.temp_max);
  low = Math.round(data.list[0].main.temp_min);
  textA.innerText = `↑${high}° / ↓${low}°`;

  let day2 = new Date(data.list[8].dt_txt);
  console.log(day2)

  // let day2Day = day2;

  day2Day.innerText = dayNames[1];

  day2Icon.src = `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
  console.log(data.list[8].main.temp_max, data.list[8].main.temp_min);
  high = Math.round(data.list[8].main.temp_max);
  low = Math.round(data.list[8].main.temp_min);
  textB.innerText = `↑${high}° / ↓${low}°`;

  let day3 = new Date(data.list[16].dt_txt);
  console.log(day3)

  // let day1Day = day1;

  day3Day.innerText = dayNames[2];
  day3Icon.src = `https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
  console.log(data.list[16].main.temp_max, data.list[16].main.temp_min);
  high = Math.round(data.list[16].main.temp_max);
  low = Math.round(data.list[16].main.temp_min);
  textC.innerText = `↑${high}° / ↓${low}°`;

  let day4 = new Date(data.list[0].dt_txt);
  console.log(day4)

  // let day1Day = day1;

  day4Day.innerText = dayNames[3];
  day4Icon.src = `https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
  console.log(data.list[24].main.temp_max, data.list[24].main.temp_min);
  high = Math.round(data.list[24].main.temp_max);
  low = Math.round(data.list[24].main.temp_min);
  textD.innerText = `↑${high}° / ↓${low}°`;

  let day5 = new Date(data.list[32].dt_txt);
  console.log(day5)

  // let day1Day = day1;

  day5Day.innerText = dayNames[4];
  day5Icon.src = `https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
  console.log(data.list[32].main.temp_max, data.list[32].main.temp_min);
  high = Math.round(data.list[32].main.temp_max);
  low = Math.round(data.list[32].main.temp_min);
  textE.innerText = `↑${high}° / ↓${low}°`;
}

async function currentGeoWeatherCall() {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`
  );
  const data = await promise.json();
  // const getData = await fetch(`https://openweathermap.org/img/wn/@2x.png`);
  // const Always = await getData.json();


  loc.innerText = data.name;
  tempF.innerText = `Current Temp: ${Math.round(data.main.temp)}° `;
  desc.innerText = data.weather[0].description;
  tempMin.innerText = `L: ${Math.round(data.main.temp_min)}°`;
  tempMax.innerText = `H: ${Math.round(data.main.temp_max)}°`;
  // day1Current.src = Always.list[0].weather[0].icon;
}

function errorFunc(error) {
  console.log(error.message);
}

async function fetchWeather(){
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${apiKey}&units=${units}&cnt=${cnt}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  data.list.forEach(hourlyWeatherData => {
    const hourlyWeatherDataDiv = createWeatherDescription(hourlyWeatherData);
    weatherContainer.appendChild(hourlyWeatherDataDiv);
});
}

// start of the search event

let savedCityArray = [" "];
let favListA = document.getElementById("favListA")
let favListB = document.getElementById("favListB")
let favListC = document.getElementById("favListC")
let addToFavBtn = document.getElementById("addToFavBtn")

addToFavBtn.addEventListener("click", function (event) {
  // $('.addToFavBtn').on('click', event => {
    console.log(event.target);
    var storeName = loc.innerText;
    console.log(storeName);
    savedCityArray.push(storeName);
    for (var i = 0; i < 0; i++) {
      savedCityArray.push(i);
    }
    favListA.innerText = savedCityArray[0];
    favListB.innerText = savedCityArray[1];
    favListC.innerText = savedCityArray[2];


    // storeName = savedCityArray;
    //map thru array savedCityArray to make them all display
    //Math
    // localStorage.setItem("favorites", JSON.stringify(savedCityArray));


    // var favorites = localStorage.getItem("favorites");
    // if (!favorites){
    //   localStorage.setItem("favorites", JSON.stringify({stores:[0]}));
    //   favorites = JSON.parse(localStorage.getItem("favorites"));
    // }else{
    //   favorites = JSON.parse(favorites);
    // }
    
    // favorites.stores.push(storeName);
  
    // localStorage.setItem("favorites", JSON.stringify(favorites));
  

  });

  // async function AddToFavList(){
  //   localStorage.setItem("favorites", JSON.stringify(favList))
  // }




searchBtn.addEventListener("click", function (e) {
  searchWeather();
  fiveDayForecast();
});

// async function fiveDayCall() {
//   const promise = await fetch(
//     `https://api.openweathermap.org/data/2.5/onecall?lat=38.7267&lon=-9.1403&exclude=current,hourly,minutely,alerts&units=metric&appid=${api}`
//   );
//   const data = await promise.json();
//   console.log(data);
// }

async function fiveDayForecast() {
  cityOutput = searchInput.value.toLowerCase();


  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityOutput}&appid=${api}&units=imperial`
  );
  const data = await promise.json();



  console.log(data.list[0].main.temp_max, data.list[0].main.temp_min);
  high = Math.round(data.list[0].main.temp_max);
  low = Math.round(data.list[0].main.temp_min);
  textA.innerText = `↑${high}° / ↓${low}°`;

  console.log(data.list[8].main.temp_max, data.list[8].main.temp_min);
  high = Math.round(data.list[8].main.temp_max);
  low = Math.round(data.list[8].main.temp_min);
  textB.innerText = `↑${high}° / ↓${low}°`;

  console.log(data.list[16].main.temp_max, data.list[16].main.temp_min);
  high = Math.round(data.list[16].main.temp_max);
  low = Math.round(data.list[16].main.temp_min);
  textC.innerText = `↑${high}° / ↓${low}°`;


  console.log(data.list[24].main.temp_max, data.list[24].main.temp_min);
  high = Math.round(data.list[24].main.temp_max);
  low = Math.round(data.list[24].main.temp_min);
  textD.innerText = `↑${high}° / ↓${low}°`;

  console.log(data.list[32].main.temp_max, data.list[32].main.temp_min);
  high = Math.round(data.list[32].main.temp_max);
  low = Math.round(data.list[32].main.temp_min);
  textE.innerText = `↑${high}° / ↓${low}°`;
}

// Weather Search
async function searchWeather() {
  cityOutput = searchInput.value.toLowerCase();

  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityOutput}&APPID=${api}&units=imperial`
  );
  const data = await promise.json();

  loc.innerText = data.name;
  tempF.innerText = data.main.temp;
  desc.innerText = data.weather[0].description;
  tempMin.innerText = data.main.temp_min;
  tempMax.innerText = data.main.temp_max;
}

// const error = document.getElementById("error");

// // // Accesing Geolocation of User
// // async function getData() {
//   window.addEventListener('load', () => {
// // function getData() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       // Storing Longitude and Latitude in variables
//       long = position.coords.longitude;
//       lat = position.coords.latitude;
//       const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

//       fetch(base)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           const temp = data.main;
//           const place = data.name;
//           const { description, icon } = data.weather[0];
//           const { sunrise, sunset } = data.sys;

          // const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          // iconImg.src = iconUrl;
//           // Converting Epoch(Unix) time to GMT
//           const sunriseGMT = new Date(sunrise * 1000);
//           const sunsetGMT = new Date(sunset * 1000);

//           // Interacting with DOM to show data

//           loc.textContent = `${place}`;
//           desc.textContent = `${description}`;
//           tempC.textContent = `${temp.toFixed(2)} °C`;
//           tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
//           sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
//           sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
//         });
//     });
//   }
// }
// ;

// async function getData(){
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       // Storing Longitude and Latitude in variables
//       long = position.coords.longitude;
//       lat = position.coords.latitude;
//       const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

//       fetch(base)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           const temp = data.main;
//           const place = data.name;
//           const { description, icon } = data.weather[0];
//           const { sunrise, sunset } = data.sys;
// }
//     }
//   }
// }

//   const promise = await fetch(data);
// const data = await promise.json();

// }

// let temp = document.getElementById("temp");

//   // console.log(data.main)
//   // temp.textContent = data.main;

//   // console.log(data.name)
//   // place.textContent = data.name;

// }
