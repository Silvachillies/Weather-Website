// import getWeather from "./getWeather";

// //Parser function

// let forecastData = [];
// async function cityValue(city) {
//   forecastData = await getWeather(city);
// }

// const checkError = () => Object.hasOwn(forecastData, "error");

// const getLocation = function () {
//   let currentLocation = { ...forecastData.location };
//   let { name: Name, country: Country, tz_id: timeZone } = currentLocation;
//   return { Name, Country, timeZone };
// };

// const getcurrentWeather = async function () {
//   const currentWeather = await { ...forecastData.current };
//   const {
//     temp_c: tempnow,
//     temp_f: tempF,
//     feelslike_c: feelsLike,
//     gust_mph: windSpeed,

//     precip_in: preCip,
//   } = currentWeather;

//   return {
//     tempnow,
//     feelsLike,
//     windSpeed,
//     tempF,
//     preCip,
//   };
// };

// // const getAstros = function () {
// //   const astros = { ...forecastData.forecast };
// //   const {
// //     astro: { sunrise, sunset },
// //     date,
// //   } = astros;
// //   return { sunrise, sunset, date };
// // };

// export { cityValue, checkError, getcurrentWeather, getLocation };
