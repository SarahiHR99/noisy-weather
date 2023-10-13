import { useState } from 'react'

interface CityInputProps {
    setCity: (newCity: string) => void
}

export function CityInput({ setCity }: CityInputProps){

    const [ubi, setUbi] = useState("")

    return (
        <div className='container'>
            <input placeholder='Ciudad...'
                value={ubi}
                onChange={e => setUbi(e.target.value)}
            />
            <button onClick={() => {
                setCity(ubi)
            }}>
            🔎
            </button>
        </div>
    )

}