import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFech"


export const MultipleCustonHooks = () => {

  const {counter, increment} = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character?page=${counter}`)

  const character = data && data.results && data.results[0]


  return (
    <>
    {
      isLoading ? (
        <div className="alert alert-info text-center">
          Cargando...
        </div>
      ) : hasError ? (
        <div className="alert alert-danger text-center">
          Hubo un error al cargar los datos.
        </div>
      ) : (
        <>
          <h1>BreakingBad Quotes</h1>
          <hr />
    
          <blockquote className="blockquote text-end">
            <p className="mb-1">{data?.results[0]?.name}</p>
            <footer className="blockquote-footer">
              {data?.results[0]?.species}
            </footer>
            {/* <img src={data?.results[13]yas.image} alt="Personaje" /> */}
          </blockquote>
        </>
      )
    }
    <button className="btn btn-primary"
    disabled={isLoading}
    onClick={ () => increment() }>
      Next
    </button>
    </>
  )
}
