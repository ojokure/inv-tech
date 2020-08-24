const { normalizeInput } = require("../helper");

const axios = require("axios");

const [, , ...locationNames] = normalizeInput(process.argv);

function getWeatherInfo(locationNames) {
  locationNames.forEach((location) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=771dcef478ae5faab8ee377e738531eb`
      )
      .then((response) => {
        const time = standardizeLocalTime(response.data.timezone);
        const location = response.data.name;
        const description = response.data.weather[0].description;
        const temperature = response.data.main.temp;
        console.log(
          `It's ${time} in ${location} with ${description} at ${temperature}°C temp`
        );
      })
      .catch((err) => {
        console.log("Oops! Please try again");
      });
  });
}

function standardizeLocalTime(timezone) {
  const date = new Date();

  const unixTime = date.getTime();
  const offset = date.getTimezoneOffset() * 60000;

  const utcTime = unixTime + offset;

  const standardTime = utcTime + timezone * 1000;
  const localTime = new Date(standardTime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return localTime;
}

getWeatherInfo(locationNames);
