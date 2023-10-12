interface DayProps {
    name: string
    picture: string
    temperature: number
}

export function Day({ name, picture, temperature }: DayProps) {

    const date = new Date(name)
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })

    return (
        <div className="day" >
            <div>
                {dayName}
            </div>
            <h2>
                {picture}
            </h2>
            <div>
                {temperature + "°"}
            </div>
        </div>
    )
}
