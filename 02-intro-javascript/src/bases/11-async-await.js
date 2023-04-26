   // const getImagenPromesa = () => new Promise ( resolve => resolve('http://asdasdrwerfjs.com'))
// getImagenPromesa().then(console.log)

const getImage = async() => {

    try {
    
        const apiKey = 'NDTCeIChCG79b5IoswLXRsHm2YcRXq4C'
        const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const { data } = await resp.json()
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        
        document.body.append( img )

    } catch (error) {
        // manejo del error
         console.error(error)
    }

}

getImage()





// peticion
//     .then (resp => resp.json() )
//     .then ( ( { data } ) => {
//         const { url } = data.images.original

//         const img = document.createElement('img')
//         img.src = url

//         document.body.append( img )

//     })
//     .catch( console.warn );