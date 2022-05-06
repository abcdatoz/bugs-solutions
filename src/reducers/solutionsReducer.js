import {GET_SOLUTIONS,ADD_SOLUTION,EDIT_SOLUTION,DELETE_SOLUTION, SET_SOLUTION_MODE } from '../actions/solutionsActions'

const initialState = {
    lista:[],
    mode: ''
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_SOLUTIONS:
            return{
                ...state,
                lista: action.payload
            }
        case ADD_SOLUTION:
            return{
                ...state,
                lista: [...state.lista, action.payload]
            }
        case EDIT_SOLUTION:            
            return {
                ...state,
                lista: [...state.lista.filter(item=> item.id !== action.payload.id), action.payload]
            }
        case DELETE_SOLUTION:
            return{
                ...state,
                lista: state.lista.filter(item=>item.id !== action.payload)
            }

        case SET_SOLUTION_MODE:
            return{
                ...state,
                mode: action.payload
            }
        
        default:
            return state        
    }
}