import {GET_WALLETS} from '../actions/walletsActions'

const initialState = {
    lista:[]
} 

export default function(state=initialState, action){
    switch (action.type) {
        case GET_WALLETS:
                return {
                    ...state,
                    lista: action.payload
                }
            break;    
        default:
            return state
    }
}