import axios from 'axios'
import { tokenConfig, tokenConfigMultipart } from './auth'


export const GET_SOLUTIONS ='GET_SOLUTIONS'
export const ADD_SOLUTION ='ADD_SOLUTION'
export const EDIT_SOLUTION ='EDIT_SOLUTION'
export const DELETE_SOLUTION ='DELETE_SOLUTION'
export const SET_SOLUTION_MODE = 'SET_SOLUTION_MODE'


const urlbase ='http://localhost:8080/api/'
const urlResource = 'http://localhost:8080/resources/'


export const getSolutions = () => (dispatch, getState) => {
    
    axios.get(urlbase + 'solutions/', tokenConfig(getState))
        .then( res => {

            let newArray = res.data.map (item => {

                let url = urlResource + item.image
                let obj = {
                    ...item,
                    url
                }
                return obj
            })

            dispatch({
                type: GET_SOLUTIONS,
                payload: newArray
            })
        })
        .catch(err => console.log(err))
}

export const addSolution = (registro) => (dispatch, getState) => {

    axios.post(urlbase + 'solutions/', registro, tokenConfigMultipart(getState))
        .then (res => {

            let url = urlResource + res.data.image

            let obj = {
                ...res.data,
                url
            }

            

            dispatch({
                type: ADD_SOLUTION,
                payload: obj
            })
        })
        .catch(err => console.log(err))
        
}
export const editSolution = (registro, id) => (dispatch, getState) => {    
    axios.put(urlbase + `solutions/${id}`, registro, tokenConfig(getState))
        .then (res => {

            let url = urlResource + res.data.image

            let obj = {
                ...res.data,
                url
            }

            dispatch({
                type: EDIT_SOLUTION,
                payload: obj
            })

             
        })
        .catch( err => console.log(err))
}

export const deleteSolution = (id) => (dispatch, getState) => {

    
    axios.delete(urlbase + `solutions/${id}`,  tokenConfig(getState))    
        .then( res => {
            dispatch ({
                type: DELETE_SOLUTION,
                payload: id
            })
        })
        .catch(err => console.log(err))
}


export const setSolutionMode = (newmode) => (dispatch) => {
    dispatch ({
        type: SET_SOLUTION_MODE,
        payload: newmode
    })
}


