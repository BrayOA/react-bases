import { Gifitem } from "./Gifitem"
import { usesFetchGifs } from "../hooks/usesFetchGifs"

export const GifGrid = ({category}) => {

  const {images, isLoading} = usesFetchGifs ( category)
 

  return (
    <>

        <h3>{category}</h3>
        {
          isLoading && (<h2>Loading...</h2>)
        }
        

        <div className="card-grid">
          {
            images.map((image) => (
              <Gifitem 
              key={ image.id }
              {...image}
              />
            ))
          }
          
        </div>

    </>
  )
}
