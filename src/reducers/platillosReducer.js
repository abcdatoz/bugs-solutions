import {GET_PLATILLOS,
        ADD_PLATILLO,
        EDIT_PLATILLO,
        DELETE_PLATILLO,
        SET_PLATILLO_MODE, 
        SET_PLATILLO_ID } 
        from '../actions/platillosActions'

const initialState = {
    lista:[],
    mode: '',
    idBug:''
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_PLATILLOS:
            return{
                ...state,
                lista: action.payload
            }
        case ADD_PLATILLO:
            return{
                ...state,
                lista: [...state.lista, action.payload]
            }
        case EDIT_PLATILLO:
            console.log (action.payload)
            return {
                ...state,
                lista: [...state.lista.filter(item=> item.id !== action.payload.id), action.payload]
            }
        case DELETE_PLATILLO:
            return{
                ...state,
                lista: state.lista.filter(item=>item.id !== action.payload)
            }

        case SET_PLATILLO_MODE:
            return{
                ...state,
                mode: action.payload
            }
        case SET_PLATILLO_ID:
            return{
                ...state,
                idBug: action.payload
            }
        default:
            return state        
    }
}