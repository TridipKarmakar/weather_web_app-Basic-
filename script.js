document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const error = document.getElementById("error-message");
  const weatherInfo = document.getElementById("weather-info");
  const API_KEY = "916f8097d5f72d5a1d25c9dfe9a0991b";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return; // if the city name is blank then simple return nothing to do

    // now we try to catch the details of the city

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // gets the data
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log(response);

    if (!response.ok) {
      throw new Error("City Not found");
    }

    const data = await response.json();
    console.log(data);

    return data;
  }

  function displayWeatherData(data) {
    cityName.textContent = `City Name: ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp}`;
    description.textContent = ` ${data.weather[0].description}`;

    let iconCode = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    document.getElementById("description-icon").src = iconUrl;

    weatherInfo.classList.remove("hidden");
    error.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    error.classList.remove("hidden");
  }
});
