function weatherupdate(response) {
    let temp = document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let city = document.querySelector("#city");
    city.innerHTML = response.data.city;
    temp.innerHTML = Math.round(temperature);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.temperature.humidity;
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let description = document.querySelector("#description");
    description.innerHTML = response.data.condition.description;
    let currentDate = document.querySelector("#current-date");
    let date = new Date(response.data.time * 1000);
    currentDate.innerHTML = formatDate(date);
    let iconElement = document.querySelector("#icon");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;

}
function searchcity(city) {
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(weatherupdate);
}

function cityupdate(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#search-form-input");
    searchcity(cityInput.value);
}

let search= document.querySelector("#search-form");
search.addEventListener("submit", cityupdate);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }


  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}



function theme() {
  let body = document.querySelector("body");
  if (body.classList.contains("black")) {
    body.classList.remove("black");
  } else {
    body.classList.add("black");
  }
}

let button = document.querySelector("button");
button.addEventListener("click", theme);
