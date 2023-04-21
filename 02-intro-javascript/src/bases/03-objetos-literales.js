

const persona = {
    nombre: 'tony',
    apellido: 'Starck',
    edad: 45,
    direccion: {
        ciudad:'new york',
        zip: 234235453,
        lat:94.3848,
        lon:78.28282

    }
}

//console.table (persona)
console.log(persona)

const persona2 = {...persona}
persona2.nombre = 'peter'

console.log(persona2);