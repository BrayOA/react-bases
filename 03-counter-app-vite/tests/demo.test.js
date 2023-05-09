
describe('Pruevas en <DemoComponet/>', () => {
  
    test('esta prueva no debe de fallar', () => {
    
         // 1. Inicializacion
        const message1 = 'hola mundo';
    
         // 2. Estimulacion
    
         const message2 =message1.trim();
    
         // 3. Observar el comportamiento... esperado
        expect(message1).toBe(message2)
    
    })

})

