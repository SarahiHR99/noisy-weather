import { useMemo } from 'react'
import { Hour } from './Hour'

export interface HourType {
  time: string
  temp_c: number
  condition: {
    icon: string
  }
}

interface NextHoursProps {
  allHours: HourType[]
  currentHour: string
}

export function NextHours({ allHours, currentHour }: NextHoursProps) {

  const currentDate = new Date(currentHour)

  const filteredHours = useMemo(() => {
    return allHours.filter((hour) => {
      const iterationDate = new Date(hour.time)
      if (currentDate <= iterationDate) {
        return true
      } else {
        return false
      }
    })
  }, [allHours, currentHour])

  return (
    <div className="hours card">
      {filteredHours.map((hour) =>(
        <Hour
          key={hour.time}
          time={new Date(hour.time).getHours() + ":00"}
          picture={hour.condition.icon}
          temperature={hour.temp_c}
        />
      ))}
    </div>
  )
}