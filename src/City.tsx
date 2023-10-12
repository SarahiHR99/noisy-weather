export function City({name, temperature}) {
    return (
        <div>
            <div>
                {name}
            </div>
            <h1>
                {temperature + "°"}  
            </h1>
        </div>
    )
}