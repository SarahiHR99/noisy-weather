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
  const actualHour = currentDate.getHours()

  const filteredHours = useMemo(() => {
    return allHours.filter((hour) => {
      const iterationDate = new Date(hour.time)
      const iterationHour = iterationDate.getHours()
      if (actualHour <= iterationHour) {
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
          time={new Date(hour.time).getHours() + ":00"}
          picture={hour.condition.icon}
          temperature={hour.temp_c}
        />
      ))}
    </div>
  )
}