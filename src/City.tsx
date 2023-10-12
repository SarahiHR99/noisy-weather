interface CityProps {
    name: string
    temperature: number
}

export function City({ name, temperature }: CityProps) {
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