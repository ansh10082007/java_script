//not entered APIkey value , can get it from openWeather API 
const btn = document.getElementById("btn");

btn.addEventListener('click', async function(){

    const city = document.getElementById('city').value;

    const {lat, lon} = await getLatLon(city);

    const aqi_result = await getAqi(lat, lon);
    const temp_result = await getTemp(lat, lon);
    const humidity_result = await getHumidity(lat, lon);

    document.getElementById('aqi').textContent = aqi_result;
    document.getElementById('temp').textContent = temp_result;
    document.getElementById('humidity').textContent = humidity_result;

});
async function getAqi(lat, lon){

    const res = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIkey}`);

    const data = await res.json();

    return data.list[0].main.aqi;
}
async function getTemp(lat, lon){

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);

    const data = await res.json();

    return data.main.temp;
}
async function getHumidity(lat, lon){

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);

    const data = await res.json();

    return data.main.humidity;
}

async function getLatLon(city){

    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`);

    const data = await res.json();

    return {
        lat: data[0].lat,
        lon: data[0].lon
    };
}
