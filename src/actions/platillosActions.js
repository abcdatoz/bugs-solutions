import axios from 'axios'
import { tokenConfig, tokenConfigMultipart } from './auth'
import { toast } from 'react-toastify';

export const GET_PLATILLOS ='GET_PLATILLOS'
export const ADD_PLATILLO ='ADD_PLATILLO'
export const EDIT_PLATILLO ='EDIT_PLATILLO'
export const DELETE_PLATILLO ='DELETE_PLATILLO'
export const SET_PLATILLO_MODE = 'SET_PLATILLO_MODE'
export const SET_PLATILLO_ID = 'SET_PLATILLO_ID'

const urlbase ='http://localhost:8080/api/'



export const getPlatillos = () => (dispatch, getState) => {

    
    axios.get(urlbase + 'platillos/', tokenConfig(getState))
        .then( res => {

            let newArray = res.data.map (item => {

                let url = 'http://localhost:8080/api/resources/' + item.imagen
                let obj = {
                    ...item,
                    url
                }
                return obj
            })

            dispatch({
                type: GET_PLATILLOS,
                payload: newArray
            })

         
        })
        .catch(err => console.log(err))
}

export const addPlatillo = (registro) => (dispatch, getState) => {

    console.log(registro)
    axios.post(urlbase + 'platillos/', registro, tokenConfig(getState))
        .then (res => {


            dispatch({
                type: ADD_PLATILLO,
                payload:res.data
            })
        })
        .catch(err => {
            
        
            toast.error(err.response.data.error);
            
            }
            )
        
}
export const editPlatillo = (registro, id) => (dispatch, getState) => {    

    axios.put(urlbase + `platillos/${id}`, registro, tokenConfig(getState))
        .then (res => {


           
            
            dispatch({
                type: EDIT_PLATILLO,
                payload: res.data
            })

             
        })
        .catch( err => console.log(err))
}

export const deletePlatillo = (id) => (dispatch, getState) => {
   
    axios.delete(urlbase + `platillos/${id}`,  tokenConfig(getState))    
        .then( res => {
            dispatch ({
                type: DELETE_PLATILLO,
                payload: id
            })
        })
        .catch(err => console.log(err))
}


export const setPlatilloMode = (newmode) => (dispatch) => {
    dispatch ({
        type: SET_PLATILLO_MODE,
        payload: newmode
    })
}


export const setPlatilloID = (newID) => (dispatch) => {
    dispatch({
        type: SET_PLATILLO_ID,
        payload: newID
    })
}