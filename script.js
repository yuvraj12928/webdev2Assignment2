const API_KEY = "d1b8c9e5a0f2c3b1e4f5g6h7i8j9k0l";
const form = document.querySelector("weather-form");
const weatherInfo = document.querySelector(".info");
const weatherHistory = document.querySelector('.history')
const searchHistory = []
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchedCity = city.value
    getData(searchedCity)

})
async function getData(city) {
    if (City)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}&units=metric`);
            appid = ${ API_KEY } `)`
            const data = await response.json();
            if (data.cod === 200) {
                console.log(data);
                weatherInfo.innerHTML = `
    <h3>weather info</h3>
    <p>city: ${data.name}</p>
    <p>temperature: ${(data.main.temp - 273.15).toFixed(1)}°C</p>
    <p>weather: ${data.weather[0].main}</p>
    <p>humidity: ${data.main.humidity}%</p>
    <p>wind speed: ${data.wind.speed} m/s</p>`

                if (!searchHistory.includes(searchedCity)) {
                    searchHistory.push(searchedCity)
                    localStorage.setItem("searchHistory", JSON.stringify(searchHistory))
                }
            } else {
                weatherInfo.innerHTML = `
        <h3>weather info</h3>
        <p>city not found</p>`
            }
        } catch (error) {
            console.error(error);
            weatherInfo.innerHTML = `
                <h3>weather info</h3>
                <p>error fetching weather data</p>`
        }

    function get

    }
function showHistory() {
    const history = JSON.parse(localStorage.getItem("searchHistory"))
    history.forEach(city => {
        const l1 = document.createElement("button");
        l1.textContent = city;
        l1.addEventListener("click", () => { getData(city) })
        weatherHistory.appendChild(l1);
    })
}
showHistory()

