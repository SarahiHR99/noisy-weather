import { useEffect, useState } from 'react'

export function CatsFact() {

    const [fact, setFact] = useState("")

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
          .then(r => r.json())
          .then(respuesta => {
            setFact(respuesta.fact)
          })
      }, [])

    return (
        <div>
            {fact}
        </div> 
    )
    
}
