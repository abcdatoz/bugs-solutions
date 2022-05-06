import axios from 'axios'
import { tokenConfig } from './auth'


export const GET_WALLETS ='GET_WALLETS'

const urlbase ='http://prueba-api.nextia.mx/api/v1/'



export const getWallets = () => (dispatch, getState) => {

    
    axios.get(urlbase + 'member/wallets', tokenConfig(getState))
        .then( res => {

            dispatch({
                type: GET_WALLETS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
