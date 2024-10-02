function changeWeather(response){
let temperatureElement=document.querySelector("#temperature");
let temperature =response.data.temperature.current;
let cityElement =document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let temperatureIconElement= document.querySelector("#icon");


temperatureElement.innerHTML=Math.round(temperature);
cityElement.innerHTML=response.data.city;
descriptionElement.innerHTML=response.data.condition.description;
humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
temperatureIconElement.innerHTML=`<img src="${response.data.condition.icon_url}" class="temperature-icon"/>`;
}

function searchCity(city){
let apiKey="8e95b71ct703a6fac0458b466ebo4b0b";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(changeWeather);
}
function showSubmit(event){
    event.preventDefault();
  let searchInput=document.querySelector("#search-input-app");

   
   searchCity(searchInput.value);
   
  

}

let searchFormElement=document.querySelector("#search-form-app");
searchFormElement.addEventListener ("submit", showSubmit);

searchCity("city");

let date = new Date();
weatherElement=document.querySelector("#current-time");
weatherElement.innerHTML= formatDate(date);

function formatDate(date){
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return  `${day} ${hours}:${minutes}`;
}


 



 