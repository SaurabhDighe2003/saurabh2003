const input = document.getElementById("input-city");
const button = document.getElementById("button");

const cityname=document.getElementById("cityname");
const temperature=document.getElementById("temp");
const time=document.getElementById("time");

async function getWeather(cityName) {   
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6edaa48bc9e747f280e50252251403&q=${cityName}&aqi=yes`);
        
        if (!response.ok) {
            throw new Error(`Weather data not found for city: ${cityName}`);
        }       
        return await response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong while fetching the weather data. Please try again.");
        return null; 
    }
}
button.addEventListener("click", async () => {
    const city = input.value;
    const result = await getWeather(city);

    cityname.innerText=`${result.location.name},${result.location.region}, ${result.location.country}`;
    temperature.innerText=`${result.current.temp_c}°c`;
    time.innerText=`${result.current.condition.text}`; 
});


//http://api.weatherapi.com/v1/current.json?key=6edaa48bc9e747f280e50252251403&q=${cityName}&aqi=yes