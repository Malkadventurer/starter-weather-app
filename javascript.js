let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let hour = now.getHours();

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${day} ${month} ${date}, ${hour}:${minutes}`;

function fahrenheitMath(event) {
  event.preventDefault();
  let temperature = document.querySelector(".temperature");
  let degree = temperature.innerHTML;
  temperature.innerHTML = Math.round((degree * 9) / 5 + 32);
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", fahrenheitMath);

function changeCelsius(event) {
  event.preventDefault();
  let temperatureNumber = document.querySelector(".temperature");
  temperatureNumber.innerHTML = "19";
}
let celsiusChange = document.querySelector("#celsius");
celsiusChange.addEventListener("click", changeCelsius);

function changeFahrenheit(event) {
  event.preventDefault();
  let temperatureNumber = document.querySelector(".temperature");
  temperatureNumber.innerHTML = "66";
}
let fahrenheitChange = document.querySelector("#fahrenheit");
fahrenheitChange.addEventListener("click", changeFahrenheit);

//

function displayWeatherConditon(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let apiKey = "5df8aef5bdd4c12142826a987f87c062";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditon);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
}

//
//

function searchLocation(position) {
  let apiKey = "5df8aef5bdd4c12142826a987f87c062";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeatherConditon);
  console.log(apiUrl);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentCity = document.querySelector("#search-form");
currentCity.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
searchCity("London");
