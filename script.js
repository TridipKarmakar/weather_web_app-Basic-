document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");

  const getWeatherBtn = document.getElementById("get-weather-btn");

  const weatherInfo = document.getElementById("weather-info");

  const cityName = document.getElementById("city-name");

  const temperature = document.getElementById("temperature");

  const description = document.getElementById("description");

  const errorMessage = document.getElementById("error-message");

  const API_KEY = "916f8097d5f72d5a1d25c9dfe9a0991b"; //env variable

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw an error
    // server/database is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);

      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    //gets the data

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);
    if (!response.ok) {
      throw new Error("City Not found");
    }

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    //display the data

    console.log(data);
    const { name, main, weather } = data;

    // Adds the data in the paragraph
    cityName.textContent = `City Name: ${name}`;

    temperature.textContent = `Temperature: ${main.temp}`;

    description.textContent = `Weather: ${weather[0].description}`;

    // unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");

    errorMessage.classList.remove("hidden");
  }
});
