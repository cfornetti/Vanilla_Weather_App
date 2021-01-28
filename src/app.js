function displayTemperature (response){
    let temperatureElement=document.querySelector("#temperature");
    temperatureElement.innerHTML= response.data.main.temp;
};

let apiKey="d41ef9769dc7a581713400eb6cdff7f1";
let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);