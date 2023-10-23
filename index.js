
const apiKey="59266d226fcc19bd60dac70d6e4b450d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather_icon");
async function checkWeather(cname){
    const response = await fetch(apiUrl+cname+ `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
        
    var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"kmph";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }

    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }

    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/Rain.png";
    }

    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/Drizzle.png";
    }

    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/Mist.png";
    }

    document.querySelector(".weather").style.display= "block";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
// cname=window.prompt();
