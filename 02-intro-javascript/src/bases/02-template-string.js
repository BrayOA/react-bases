

const nombre = 'Brayan'
const apellido = 'Orcon Arellano'

//const nombreCompleto = nombre + ' '+ apellido;
 const nombreCompleto = ` ${nombre} ${apellido} `

console.log(nombreCompleto)

function getSaludo(nombre) {
    return ' hola mundo ' + nombre
}

console.log( `Este es un texto: ${ getSaludo (nombre) }` ) 