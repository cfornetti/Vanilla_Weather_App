function formatDate (timestamp){
    let date = new Date (timestamp);
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
    let day = days[date.getDay()];
    return `${day} ${formatHours(timestamp)}`;
}

function formatHours(timestamp){
    let date = new Date (timestamp);
    let hours = date.getHours();
     if (hours < 10) {
        hours=`0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes=`0${minutes}`;
    }
    return`${hours}:${minutes}`;
}

function displayTemperature (response){
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let feelslikeElement=document.querySelector("#feels-like");
    let pressureElement=document.querySelector("#pressure");
    let dateElement=document.querySelector("#date");
    let iconElement=document.querySelector("#icon");
    

    celsiusTemperature=response.data.main.temp;

    temperatureElement.innerHTML= Math.round(celsiusTemperature);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
    feelslikeElement.innerHTML=Math.round(response.data.main.feels_like);
    pressureElement.innerHTML=Math.round(response.data.main.pressure);
    dateElement.innerHTML=formatDate(response.data.dt*1000);
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
};

function displayForecast(response){
 let  forecastElement=document.querySelector("#forecast");
 let forecast=response.data.list[0];
 
 forecastElement.innerHTML=`
 <div class="col-2">
  <h3>
    ${formatHours(forecast.dt*1000)}
  </h3>
  <img 
  src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
  alt=""
  />
   <div class="weather-forecast-temperature">
     <strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
   </div>
</div>
 `;
 forecast=response.data.list[1];
 forecastElement.innerHTML+=`
 <div class="col-2">
  <h3>
    ${formatHours(forecast.dt*1000)}
  </h3>
  <img 
  src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
  alt=""
  />
   <div class="weather-forecast-temperature">
     <strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
   </div>
</div>
 `;

  forecast=response.data.list[2];
 forecastElement.innerHTML+=`
 <div class="col-2">
  <h3>
    ${formatHours(forecast.dt*1000)}
  </h3>
  <img 
  src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
  alt=""
  />
   <div class="weather-forecast-temperature">
     <strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
   </div>
</div>
 `;

  forecast=response.data.list[3];
 forecastElement.innerHTML+=`
 <div class="col-2">
  <h3>
    ${formatHours(forecast.dt*1000)}
  </h3>
  <img 
  src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
  alt=""
  />
   <div class="weather-forecast-temperature">
     <strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
   </div>
</div>
 `;

  forecast=response.data.list[4];
 forecastElement.innerHTML+=`
 <div class="col-2">
  <h3>
    ${formatHours(forecast.dt*1000)}
  </h3>
  <img 
  src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
  alt=""
  />
   <div class="weather-forecast-temperature">
     <strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
   </div>
</div>
 `;

  forecast=response.data.list[5];
 forecastElement.innerHTML+=`
 <div class="col-2">
  <h3>
    ${formatHours(forecast.dt*1000)}
  </h3>
  <img 
  src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
  alt=""
  />
   <div class="weather-forecast-temperature">
     <strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
   </div>
</div>
 `;
 
}

function search (city){
let apiKey="d41ef9769dc7a581713400eb6cdff7f1";
let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

let apiUrlForecast=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrlForecast).then(displayForecast);
}

function handleSubmit (event){
    event.preventDefault();
    let cityInputElement=document.querySelector("#city-input");
    search(cityInputElement.value);
}

function displayFahrenheitTemperature (event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9)/5 + 32;
  temperatureElement.innerHTML=Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
    temperatureElement.innerHTML=Math.round(celsiusTemperature);
}

celsiusTemperature=null;

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink=document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink=document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature)