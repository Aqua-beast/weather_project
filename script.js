const getWeatherData = async (city) => {
    const cityName = document.getElementById('cityName');
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Update HTML content
        document.getElementById("temp2").innerHTML = data.temp;
        document.getElementById("temp").innerHTML = data.temp;
        document.getElementById("feels_like").innerHTML = data.feels_like;
        document.getElementById("humidity2").innerHTML = data.humidity;
        document.getElementById("humidity").innerHTML = data.humidity;
        document.getElementById("min_temp").innerHTML = data.min_temp;
        document.getElementById("max_temp").innerHTML = data.max_temp;
        document.getElementById("wind_speed2").innerHTML = data.wind_speed;
        document.getElementById("wind_speed").innerHTML = data.wind_speed;
        document.getElementById("wind_degrees").innerHTML = data.wind_degrees;
        document.getElementById("sunrise").innerHTML = data.sunrise;
        document.getElementById("sunset").innerHTML = data.sunset;
    } catch (error) {
        console.error('error:' + error);
    }
}


// search is defined
const submit = document.getElementById('submit'); // define the submit element
submit.addEventListener('click', (e) => {
    e.preventDefault()
    const city = document.getElementById('city').value;
    getWeatherData(city);
});


//dropdown defined here
const dropdownItems = document.querySelectorAll(".dropdown-item");
for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("click", function () {
        const city = this.innerHTML;
        getWeatherData(city);
    });
}

// call the function with a default city
getWeatherData('Delhi');


// values of some other region
var places = ['Shanghai', 'Boston', 'Lucknow', 'Kolkata'];

const getWeather = async (city) => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70dc671ae7msh8ac7f443d5067e8p175e86jsne00884109055',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        document.getElementById(city+ "_tdcloud_pct").innerHTML=data.cloud_pct;
        document.getElementById(city+ "_tdtemp").innerHTML = data.temp;
        document.getElementById(city+ "_tdfeels_like").innerHTML = data.feels_like;
        document.getElementById(city+ "_tdhumidity").innerHTML = data.humidity;
        document.getElementById(city+ "_tdmin_temp").innerHTML = data.min_temp;
        document.getElementById(city+ "_tdmax_temp").innerHTML = data.max_temp;
        document.getElementById(city+ "_tdwind_speed").innerHTML = data.wind_speed;
        document.getElementById(city+ "_tdwind_degrees").innerHTML = data.wind_degrees;
        var sunrise_time = new Date(data.sunrise * 100);
        document.getElementById(city+ "_tdsunrise").innerHTML = sunrise_time.toLocaleTimeString();
        var sunset_time = new Date(data.sunset * 100);
        document.getElementById(city+ "_tdsunset").innerHTML = sunset_time.toLocaleTimeString();
        console.log(date);
    } catch (error) {
        console.error('error:' + error);
    }
}

for(let i=0; i< places.length; i++){
    getWeather(places[i]);
}


