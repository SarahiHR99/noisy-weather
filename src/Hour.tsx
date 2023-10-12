export function Hour({time, temperature}) {
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