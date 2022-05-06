import axios from 'axios'
import { tokenConfig } from './auth'


export const GET_BENEFICIOS ='GET_BENEFICIOS'

const urlbase ='http://prueba-api.nextia.mx/api/v1/'



export const getBeneficios = () => (dispatch, getState) => {

    
    axios.get(urlbase + 'member/landing_benevits', tokenConfig(getState))
        .then( res => {

            dispatch({
                type: GET_BENEFICIOS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
