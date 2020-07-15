const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY ="241051bf13976dd3ddf8b8d9f247255e";

function getWeather(lat, long){
    let weatherIcon = { 
        '01' : 'fas fa-sun'

    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){

        var icon = (json.weather[0].icon).substr(0,2);

        var temperature = json.main.temp;
        var place = json.name;
        var locationWeather = json.weather[0].description;

        // icon.innerHTML(`<i class="${weatherIcon[icon]}"></i>`);
        weather.innerText = `${locationWeather} ${temperature}°C ${place}`;
    }); //then 함수 기본적으로 함수를 호출하는 것
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    }; //객체 정보
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords =JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();

