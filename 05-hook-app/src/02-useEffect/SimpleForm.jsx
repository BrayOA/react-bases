import { useEffect, useState } from "react"
import { Message } from "./Message"



export const SimpleForm = () => {


    const [ formState, setformState ] = useState({
        username: 'strider',
        email: 'borconarellano@gmail.com'
    })

    const { username, email } = formState

    const onInputChange = ( {target} ) => {
        const { name, value } = target
        setformState({
          ...formState,
          [name]: value
        })
    }

    const onResetForm = () => {
      setcounter ( initialValue)
  }




  return (
    <>
        <h1>Formulario Simple</h1>

        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}

            />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="borconarellano@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }

        />

     {
        (username === 'strider2') && <Message/>
     }

    </>
  )
}
