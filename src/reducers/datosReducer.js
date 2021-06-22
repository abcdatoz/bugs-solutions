import {GET_DATOS, SET_DATOS } from '../actions/datosActions'

const initialState = {
    idSystem: '',
    nameSystem: ''
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_DATOS:
            return{
                ...state
            }
        
        case SET_DATOS:
            return{                
                ...action.payload
            }
        default:
            return state        
    }
}