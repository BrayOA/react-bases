import { useEffect} from "react"
import { useForm } from "../hooks/useForm"


export const FormWithCustonHook = () => {

  const { formState, onInputChange, onResetForm, username, email, password} = useForm({
      username: '',
      email: '',
      password:''
  })

  // const {username, email, password} = formState


  return (
    <>
        <h1>Formulario con custon Hook</h1>

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
            placeholder="example@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }

        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="*******"
            name="password"
            value={ password }
            onChange={ onInputChange }

        />

        <button  onClick={onResetForm} className="btn btn-primary mt-2">delete</button>

    </>
  )
}
