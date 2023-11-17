import {GET_CATEGORIA_PLATILLOS,
        ADD_CATEGORIA_PLATILLO,
        EDIT_CATEGORIA_PLATILLO,
        DELETE_CATEGORIA_PLATILLO,
        SET_CATEGORIA_PLATILLO_MODE, 
        SET_CATEGORIA_PLATILLO_ID } 
        from '../actions/categoriasPlatillosActions'

const initialState = {
    lista:[],
    mode: '',
    idBug:''
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_CATEGORIA_PLATILLOS:
            return{
                ...state,
                lista: action.payload
            }
        case ADD_CATEGORIA_PLATILLO:
            return{
                ...state,
                lista: [...state.lista, action.payload]
            }
        case EDIT_CATEGORIA_PLATILLO:
            console.log (action.payload)
            return {
                ...state,
                lista: [...state.lista.filter(item=> item.id !== action.payload.id), action.payload]
            }
        case DELETE_CATEGORIA_PLATILLO:
            return{
                ...state,
                lista: state.lista.filter(item=>item.id !== action.payload)
            }

        case SET_CATEGORIA_PLATILLO_MODE:
            return{
                ...state,
                mode: action.payload
            }
        case SET_CATEGORIA_PLATILLO_ID:
            return{
                ...state,
                idBug: action.payload
            }
        default:
            return state        
    }
}