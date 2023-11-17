import axios from 'axios'
import { tokenConfig, tokenConfigMultipart } from './auth'
import { toast } from 'react-toastify';

export const GET_CATEGORIA_PLATILLOS ='GET_CATEGORIA_PLATILLOS'
export const ADD_CATEGORIA_PLATILLO ='ADD_CATEGORIA_PLATILLO'
export const EDIT_CATEGORIA_PLATILLO ='EDIT_CATEGORIA_PLATILLO'
export const DELETE_CATEGORIA_PLATILLO ='DELETE_CATEGORIA_PLATILLO'
export const SET_CATEGORIA_PLATILLO_MODE = 'SET_CATEGORIA_PLATILLO_MODE'
export const SET_CATEGORIA_PLATILLO_ID = 'SET_CATEGORIA_PLATILLO_ID'

const urlbase ='http://localhost:8080/api/'



export const getCatPlatillos = () => (dispatch, getState) => {

    
    axios.get(urlbase + 'catplatillos/', tokenConfig(getState))
        .then( res => {

            dispatch({
                type: GET_CATEGORIA_PLATILLOS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const addCatPlatillo = (registro) => (dispatch, getState) => {

    console.log(registro)
    axios.post(urlbase + 'catplatillos/', registro, tokenConfig(getState))
        .then (res => {

            dispatch({
                type: ADD_CATEGORIA_PLATILLO,
                payload: res.data
            })
        })
        .catch(err => {
            
        
            toast.error(err.response.data.error);
            
            }
            )
        
}
export const editCatPlatillo = (registro, id) => (dispatch, getState) => {    

    axios.put(urlbase + `catplatillos/${id}`, registro, tokenConfig(getState))
        .then (res => {

            dispatch({
                type: EDIT_CATEGORIA_PLATILLO,
                payload: res.data
            })

             
        })
        .catch( err => console.log(err))
}

export const deleteCatPlatillo = (id) => (dispatch, getState) => {
   
    axios.delete(urlbase + `catplatillos/${id}`,  tokenConfig(getState))    
        .then( res => {
            dispatch ({
                type: DELETE_CATEGORIA_PLATILLO,
                payload: id
            })
        })
        .catch(err => console.log(err))
}


export const setCatPlatilloMode = (newmode) => (dispatch) => {
    dispatch ({
        type: SET_CATEGORIA_PLATILLO_MODE,
        payload: newmode
    })
}


export const setCatPlatilloID = (newID) => (dispatch) => {
    dispatch({
        type: SET_CATEGORIA_PLATILLO_ID,
        payload: newID
    })
}