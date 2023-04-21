
// Funciones en JS
const saludar =  function saludar(nombre) {
    return `hola,  ${nombre}`
}

console.log(saludar);

const saludar2 =(nombre) => {
    return `hola ${nombre}`
}

const saludar3 =(nombre) => `Hola, ${ nombre }`
const saludar4 =() => `Hola mundo`

// console.log(saludar, ('bray') )


console.log(saludar2 ('vegeta'))
console.log(saludar3 ('goku'))
console.log(saludar4 ())

const getUser = () => ({
    
        uid: 'ABC123',
        username: 'El_papi12345'
    
})
const user = getUser()
console.log(user )


// tarea

const getUserarioActivo = (nombre) =>({
        uid: 'ABC342',
        username: nombre
     })

const usuarioActivo =  getUserarioActivo ( 'fernando')
console.log(usuarioActivo) 
















