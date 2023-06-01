import { useCounter } from "../hooks/useCounter"



export const CounterWhithCustonHook = () => {

const {counter, increment, decrement, reset} = useCounter()


  return (
    <>
        <h1>Counter Whith Hook : {counter}</h1>
        <hr />


        <button onClick={ () =>increment (2)} className="btn btn-primary" >+1</button>    
        <button onClick={reset}  className="btn btn-primary">Reset</button>    
        <button onClick={() => decrement (2)}  className="btn btn-primary">-1</button>    


    </>
  )
}


