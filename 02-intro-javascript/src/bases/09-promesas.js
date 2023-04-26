
import {getHeroById} from './bases/08-imp-exp'


// const promesa = new Promise( (resolve,reject) => {

//     setTimeout ( () => {
//         const p1 = getHeroById(2)
//         resolve(p1)
//         // reject('no se pudo encontar el heroe')

//     },2000)

// })


// promesa.then( (heroes) => {
//     console.log('heroe', heroes)
// })

// .catch(err => console.warn(err))


const getHeroByIdAsync = (id) => {

    return new Promise( (resolve,reject) => {

        setTimeout ( () => {
            const p1 = getHeroById(id)
            if (p1) {
                resolve(p1)

            }else{

                reject('no se pudo encontar el heroe')
            }
    
        },2000)
    
    })
}

getHeroByIdAsync(10)
    .then(console.log)
    .catch (console.warn)


