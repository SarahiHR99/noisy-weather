import { useEffect, useState } from 'react'
import { Day } from './Day'
import { City } from './City'
import { NextHours } from './NextHours'
import { CityInput } from './Input'

interface ForecastItem {
  date: string
  day: {
    avgtemp_c: number
    condition: {
      icon: string
    }
  }
}

const weather_key = import.meta.env.VITE_WEATHER_KEY as string

function App() {
  const [temp, setTemp] = useState(0)
  const [forecast, setForecast] = useState<ForecastItem[]>([])
  const [hours, setHours] = useState([])
  const [time, setTime] = useState("")
  const [city, setCity] = useState("Quito")

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${weather_key}&q=${city}`)
      .then(r => r.json())
      .then(respuesta => {
        setTemp(respuesta.current.temp_c)
        setTime(respuesta.location.localtime)
      })
  }, [city])

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weather_key}&q=${city}&days=5`)
      .then(r => r.json())
      .then(respuesta => {
        setForecast(respuesta.forecast.forecastday)
      })
  }, [city])

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weather_key}&q=${city}&days=2`)
      .then(r => r.json())
      .then(respuesta => {
        console.log(respuesta)
        // @ts-ignore
        setHours([
          ...respuesta.forecast.forecastday[0].hour,
          ...respuesta.forecast.forecastday[1].hour
        ])
      })
  }, [city])

  return (
    <>
      <CityInput 
        setCity={setCity}
      />
      <City
        name={city}
        temperature={temp}
      />
      <NextHours
        allHours={hours}
        currentHour={time}
      />
      <div className="days card" > 
        {forecast.map((item) => (
          <Day
            key={item.date}
            name={item.date}
            picture={item.day.condition.icon}
            temperature={item.day.avgtemp_c}
          /> 
        ))}
      </div>
    </>
  )
}

export default App
