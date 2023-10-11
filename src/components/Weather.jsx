import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState(null)

    function getWeather() {
        const apiKey = '052a3b8721a484d214075e0ce0af0144'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

        fetch(url)
        .then((response) => response.json())
        .then((data) => {

            let MT = Math.round(data.main.temp)
            let FL = Math.round(data.main.feels_like)

            const weather = {
                location: `Weather in ${data.name}`,
                temperature: `Temperature: ${MT} C`,
                feelsLike: `Feels Like: ${FL} C`,
                humidity: `Humidity: ${data.main.humidity}%`,
                wind: `Wind: ${data.wind.speed} km/h`,
                condition: `Weather Condition: ${data.weather[0].description}`,
            }

            setWeatherInfo(weather)

            console.log(weather)

        })
    }

  return (
    <div name='weather' className='h-screen mx-auto w-full flex flex-col justify-between items-center weather-div text-white'>
        <div>
            {weatherInfo && (
                <div className='sm:text-4xl text-lg flex flex-col items-center justify-center mt-20'>
                    <h3 className='pb-[10px]'>{weatherInfo.location}</h3>
                    <p>{weatherInfo.temperature}</p>
                    <p>{weatherInfo.feelsLike}</p>
                    <p>{weatherInfo.humidity}</p>
                    <p>{weatherInfo.wind}</p>
                    <p>{weatherInfo.condition}</p>
                </div>
            )}
        </div>
        
        <div className='flex flex-col sm:mx-auto'>
            <input className='text-black p-3 text-xl text-center mx-36'
            type='text'
            placeholder='Enter City Name'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button className='p-1 mb-4 bg-black text-white dark:bg-white dark:text-black mt-5 mx-auto'
             onClick={getWeather}>Get Weather !</button>
        </div>
    </div>
  )
}

export default Weather