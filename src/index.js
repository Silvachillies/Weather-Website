import _ from "lodash";
import getWeather from "./getWeather";

const submit = document.querySelector("#submitBtn");
const inputCity = document.querySelector(".city");
const weatherCard = document.querySelector(".weatherCard");

weatherCard.classList.add("hidden");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  weatherCard.classList.toggle("hidden");
  const city = inputCity.value;
  getWeather(city);
});
