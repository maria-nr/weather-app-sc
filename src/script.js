function addHours() {
    let now = new Date();
    let h2 = document.querySelector("#date");
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[now.getDay()];
    h2.innerHTML = `${day} ${hours}:${minutes}`;
  }
  addHours();
  function searchCountry(event) {
    event.preventDefault();
    let h1 = document.querySelector("h1");
    let search = document.querySelector("#city-input");
    h1.innerHTML = `${search.value}`;
    searchCity(search.value);
  }

  function showTemperature(response) { 

    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.main.wind.speed);
  }

  function searchCity(event) {
    //event.preventDefault();
    let apiKey = "c522524629fe11fe83aebe5bb3814efa";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  }

let changeCountry = document.querySelector("#search-country");
changeCountry.addEventListener("submit", searchCountry);


  // Bonus point Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.
  function showTemp(response) {
    let temp = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${temperature}ºC`;
  }
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "c522524629fe11fe83aebe5bb3814efa";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    h1.innerHTML = console.log(apiUrl);
    axios.get(apiUrl).then(showTemp);
  }
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  let button = document.querySelector("#geolocation");
  button.addEventListener("click", getCurrentPosition);