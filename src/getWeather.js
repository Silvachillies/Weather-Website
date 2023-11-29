const weatherCard = document.querySelector(".weatherCard");
const namecity = document.querySelector(".name");
const regionC = document.querySelector(".region");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelsLike");
const condition = document.querySelector(".condition");
const maxtemp = document.querySelector(".maxtemp");
const mintemp = document.querySelector(".mintemp");
const precip = document.querySelector(".precip");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".windspeed");

const getWeather = async function (city) {
  try {
    const getWeatherToday = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=cd3594b0cade49eaa24190538233108&q="${city}"&aqi=no`,
      { mode: "cors" }
    );

    const todayForecast = await getWeatherToday.json();
    console.log("Fetching current weather.....", todayForecast);
    const currentWeather = {
      name: todayForecast.location.name,
      region: todayForecast.location.region,
      temperature: Math.round(todayForecast.current.temp_c),
      feelsLike: Math.round(todayForecast.current.feelslike_c),
      windspeed: Math.round(todayForecast.current.gust_mph) + " " + "mph",

      humidity: todayForecast.current.humidity + "%",
      precipitation: todayForecast.current.precip_in,
      maxTemp: Math.round(todayForecast.forecast.forecastday[0].day.maxtemp_c),
      mintemp: Math.round(todayForecast.forecast.forecastday[0].day.mintemp_c),
    };

    namecity.textContent = `Location: ${currentWeather.name}`;
    regionC.textContent = `Region: ${currentWeather.region}`;
    temp.textContent = `Current temperature: ${currentWeather.temperature}°`;
    condition.textContent = `Condition: ${currentWeather.condition}`;
    feelsLike.textContent = `Feels Like: ${currentWeather.feelsLike}`;
    windSpeed.textContent = `Wind Speed: ${currentWeather.windspeed}`;
    humidity.textContent = `Humidity: ${currentWeather.humidity}`;
    precip.textContent = `Preciptation: ${currentWeather.precipitation}`;
    maxtemp.textContent = `High: ${currentWeather.maxTemp}°`;
    mintemp.textContent = `Low: ${currentWeather.mintemp}°`;
    console.log(currentWeather);
    return currentWeather;
  } catch (error) {
    const errormsg = document.createElement("p");
    errormsg.innerHTML = "Location Not found";
    weatherCard.append(errormsg);
    console.error(error);
  }
};

export default getWeather;
