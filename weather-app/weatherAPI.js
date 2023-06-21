const apiKey = "1f2a0cdbaaca3bb543380c84bf6d092f" 
const baseUrl = "https://api.openweathermap.org/data/2.5/weather" 

const searchBox = document.querySelector(".search input") 
const searchBtn = document.querySelector(".search button") 
const weatherIcon = document.querySelector(".weatherIco")



const getWeatherByCitySearch = async (cityName) => {
        let url = `${baseUrl}?q=${cityName}&appid=${apiKey}&units=metric` 
        let response = await fetch(url) 
        let data = await response.json()
        let weatherCategory = null 

        if (response.status == 200) {
            // console.log('Call Success')
            weatherCategory = data.weather[0].main

            let componentWrapper = document.querySelector(".card")
            const colors = ["#F06B4F", "#F2AE52", "#B0CD6D", "#A33120", "#00FEBA", "#5B548A"]
            function randomColor(colors) {
                return colors[Math.floor(Math.random() * colors.length)];
            }
            function colorSoftManipulator(strcc) {
                let randomRangeIdx = Math.floor(Math.random() * colors.length)
                randomRangeIdx == 0 || randomRangeIdx === 0 ? randomRangeIdx++ : randomRangeIdx
                console.log('randomRangeIdx', randomRangeIdx)
                let char = strcc[randomRangeIdx]
                return strcc.replace(char, '0')
            }
            
            const color1 = colorSoftManipulator(randomColor(colors))
            const color2 = colorSoftManipulator(randomColor(colors))

            componentWrapper.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
        }
        if(weatherCategory === null || weatherCategory == null || data.name === undefined) return

        document.querySelector(".city").innerHTML = data.name 
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" 
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%" 
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

        document.querySelector(".weather").style.display = "block"

        const displayWeatherIco = (wc) => {
            weatherIcon.src = "images/" + wc.toLowerCase() + ".png"
        }
        displayWeatherIco(weatherCategory)
} 


searchBtn.addEventListener("click", () => {

    getWeatherByCitySearch(searchBox.value)

    //getWeatherByCitySearch(inputDataProcessingForLangMatch(searchBox.value)) // Korean || English -> to English only   // 1. if English->just do same, 2.but else Koreaninput-> do process, to translate dictionary style, data structure, find it then translate to param
})

searchBox.onkeydown = e => (e.key=="Enter" && searchBox.value != '') ? searchBtn.click() : 1 
