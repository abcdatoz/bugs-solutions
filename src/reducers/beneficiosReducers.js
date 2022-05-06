import {GET_BENEFICIOS} from '../actions/beneficiosActions'

const initialState = {
    lista:[]
} 

export default function(state=initialState, action){
    switch (action.type) {
        case GET_BENEFICIOS:
                return {
                    ...state,
                    lista: action.payload
                }
            break;    
        default:
            return state
    }
}