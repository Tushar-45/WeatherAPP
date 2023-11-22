const apiKey = "e073e486aea2fbe6cd2e4b9649e14d7a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    
    setTimeout(display(data),3000);


}
function display(data){
    if(data.name === undefined){
        document.querySelector(".load").innerHTML = `<h3 style="color: red;"> Enter Invalid city</h3> `;
        return;
    }
    document.querySelector(".load").innerHTML = ``;
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
}
searchBtn.addEventListener("click", ()=>{
    document.querySelector(".load").innerHTML = `<h3>Loading...</h3> `;
    checkWeather(searchBox.value);
})