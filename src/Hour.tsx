interface HourProps {
    time: string
    temperature: number
    picture: string
}

export function Hour({time, temperature, picture}: HourProps) {
    return (
    <div className="hour">
        <div>
            {time}
        </div>
        <img src={picture}/>
        <div>
            {temperature + "°"}
        </div>
    </div>
    )
}