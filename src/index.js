const { getWeatherInfo, normalizeInput } = require("../helper");

const [, , ...locationNames] = normalizeInput(process.argv);

function tellWeather() {
  console.log("<<< loading >>>");

  getWeatherInfo(locationNames);
}

tellWeather();
