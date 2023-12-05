let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let cityName = document.getElementById

const apiKey = "f86e3df09941ea6ed9ee289a745f4331";
const apiCurrentUrl = "https://openweathermap.org/current#name"; 
const api5NameUrl = "https://openweathermap.org/current#name";

async function searchWeather(city){
    try{
        const response = await fetch(apiCurrentUrl + city + '')

    }catch(error){
    }
}

async function logMovies() {
  const response = await fetch("https://openweathermap.org/current#name");
  const movies = await response.json();
  console.log(movies);
}



handleSubmit(){
    var city = this.state.city;
    var url = api5NameUrl+ apiKey + city;
    console.log(url);
    fetch(url, {
      method: 'GET',
      mode: "cors"
    }).then((res) => {
      var resJson = JSON.parse(res);
      console.log(resJson);
      return resJson;
    }).then((resJson) => {

    }).catch((err) => {
      console.log("error");
    });
  }
  
searchBtn.addEventListener('click', function (e){
    let value = e.target.value
    if(value && value.trim().l)

});

function GetData(){
    fetch("").then(

    )
}