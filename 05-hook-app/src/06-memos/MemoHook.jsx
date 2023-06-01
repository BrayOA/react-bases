import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"



const havyStuff = (interationNumber = 100) => {
  for (let i= 0; i < interationNumber; i++) {
    console.log('Ahi vamos...');
    
  }
  return `${interationNumber} interaciones reaalizadas`
}



 export const MemoHook = () => {
    const { counter, increment } = useCounter(100)
    const [ show, setShow ] = useState(true)

    const memorizedValue = useMemo(() => havyStuff(counter), [counter])

  return (
    <>
      <h1>counter:<small>{counter}</small> </h1>
      <hr />

      <h4>{ memorizedValue}</h4>

      <button 
        className="btn btn-primary"
        onClick={() => increment () }
      >
            +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={()=> setShow (!show) }
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
