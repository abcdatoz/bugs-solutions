import {GET_BUGS,ADD_BUG,EDIT_BUG,DELETE_BUG } from '../actions/bugsActions'

const initialState = {
    lista:[]
}

export default function(state=initialState, action){
    switch(action.payload){
        case GET_BUGS:
            return{
                ...state,
                lista: action.payload
            }
        case ADD_BUG:
            return{
                ...state,
                lista: [...state.lista, action.payload]
            }
        case EDIT_BUG:
            return {
                ...state,
                lista: [...state.lista.filter(item=> item.id !== action.payload.id), action.payload]
            }
        case DELETE_BUG:
            return{
                ...state,
                lista: state.lista.filter(item=>item.id !== action.payload)
            }
        default:
            return state        
    }
}