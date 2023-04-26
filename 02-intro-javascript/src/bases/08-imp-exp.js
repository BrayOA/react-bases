// import {heroes} from './data/heroes.js'
// import {heroes} from './data/heroes'  imp

// import  heroes, {owners} from "../data/heroes"
import  heroes from "../data/heroes"


// console.log(owners)



// const getHeroByID = ( id) => {
//     return heroes.find( ( heroes )=> {
//         if (heroes.id ===id) {
//             return true
//         } else {
//             return false
//         }
//     }) 

// }


  export const getHeroById = ( id) =>  heroes.find( ( heroes )=>  heroes.id === id)




// console.log(getHeroByID(2) )



 export const getHeroByOwner = (owner) => heroes.filter( ( heroes )=>  heroes.owner === owner)

// console.log(getHeroByOwner ('DC') )