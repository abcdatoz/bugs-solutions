import { combineReducers } from 'redux'


import auth from './auth'
import bugs from './bugsReducer'
import datos from './datosReducer'

export default combineReducers({
    auth,
    bugs, 
    datos
})