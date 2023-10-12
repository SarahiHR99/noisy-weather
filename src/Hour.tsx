interface HourProps {
    time: string
    temperature: number
}

export function Hour({time, temperature}: HourProps) {
    return (
    <div className="hour">
        <div>
            {time}
        </div>
        <div>
            {temperature + "°"}
        </div>
    </div>
    )
}