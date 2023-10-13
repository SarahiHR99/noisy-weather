import { useEffect, useState } from 'react'
import { Day } from './Day'
import { City } from './City'
import { NextHours } from './NextHours'

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

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${weather_key}&q=Quito`)
      .then(r => r.json())
      .then(respuesta => {
        setTemp(respuesta.current.temp_c)
        setTime(respuesta.location.localtime)
      })
  }, [])

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weather_key}&q=Quito&days=5`)
      .then(r => r.json())
      .then(respuesta => {
        setForecast(respuesta.forecast.forecastday)
      })
  }, [])

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weather_key}&q=Quito&days=1`)
      .then(r => r.json())
      .then(respuesta => {
        console.log(respuesta)
        setHours(respuesta.forecast.forecastday[0].hour)
      })
  }, [])

  return (
    <>
      <City
        name="Quito"
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
