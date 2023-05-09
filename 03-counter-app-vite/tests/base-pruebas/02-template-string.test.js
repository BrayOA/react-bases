

describe('prueba en 02-template-string', () => {
  
    test('Get saludo deve de retornar "hola fernado" ', () => {
      

        const name = 'fernando'
        const message = getSaludo (name)

        expect ( message ).toBe(`hola ${name}`)
    })


})
