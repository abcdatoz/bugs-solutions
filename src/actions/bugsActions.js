import axios from 'axios'
import { tokenConfig }  from './auth'


export const GET_BUGS ='GET_BUGS'
export const ADD_BUG ='ADD_BUG'
export const EDIT_BUG ='EDIT_BUG'
export const DELETE_BUG ='DELETE_BUG'



export const getBugs = (dispatch, getState) => {
    axios.get('/api/bugs/', tokenConfig(getState))
        .then( res => {
            dispatch({
                type: GET_BUGS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const addBug = (registro) => (dispatch, getState) => {

    axios.post('/api/bugs/', registro, tokenConfig(getState))
        .then (res => {
            dispatch({
                type: ADD_BUG,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
        
}
export const editBug = (registro, id) => (dispatch, getState) => {
    axios.put(`/api/bugs/${id}`, registro, tokenConfig(getState))
        .then (res => {
            dispatch({
                type: EDIT_BUG,
                payload: res.data
            })
        })
        .catch( err => console.log(err))
}

export const deleteBug = (id) => (dispatch, getState) => {
    axios.delete(`/api/bugs/${id}`, tokenConfig(getState))
        .then( res => {
            dispatch ({
                type: DELETE_BUG,
                payload: id
            })
        })
        .catch(err => console.log(err))
}