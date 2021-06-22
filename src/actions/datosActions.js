
export const GET_DATOS = 'GET_DATOS'
export const SET_DATOS = 'SET_DATOS'





export const getDatos = () => (dispatch) => {
    
    dispatch ({
        type: GET_DATOS
    })
}
   

export const setDatos = (datos) => (dispatch) => {
    dispatch ({
        type: SET_DATOS,
        payload: datos
    })
}