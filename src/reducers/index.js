import { combineReducers } from 'redux'


import auth from './auth'
import bugs from './bugsReducer'
import solutions from './solutionsReducer'
import datos from './datosReducer'
import beneficios from './beneficiosReducers'
import wallets from './walletsReducer'
import catPlatillos from './categoriasPlatillosReducer'
import platillos from './platillosReducer'

export default combineReducers({
    auth,
    bugs, 
    solutions,
    datos,
    beneficios, 
    wallets,
    catPlatillos,
    platillos
})