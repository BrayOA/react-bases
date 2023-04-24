//Desustruracion
//Asignacion destructurantes

const persona = {
    nombre: 'Tony',
    edad: 43,
    clave: 'Iroman'
}

// const {nombre, edad, clave} = persona

// console.log(nombre)
// console.log(edad)
// console.log(clave)


const userContext = ({clave, nombre, edad,rango = 'capitan'})=> {

//   console.log(nombre, edad, rango)
return {
    nombreClave: clave,
    anios: edad,
    latlon: {
        lat: 12.2122,
        lng: -13.45436

    }
}


}

const {nombreClave,anios, latlon:{ lat, lng } } = userContext(persona)


console.log(nombreClave, anios)
console.log(lat, lng)










