import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBeneficios } from '../actions/beneficiosActions'
import { getWallets } from '../actions/walletsActions'

const Beneficios = () => {

    const benevits = useSelector(state => state.beneficios.lista.unlocked)
    const benevitsLocked = useSelector(state => state.beneficios.lista.locked)
    const wallets =  useSelector(state => state).wallets.lista

    
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBeneficios())
        dispatch(getWallets())
    }, [])

    return (
        <div>
            {

                (wallets && benevits)   
                &&               
                wallets.map(wallet => (
                    <div key={wallet.id}>
                        <h5> {wallet.name}s</h5>
                        
                        {
                            benevits
                            .filter ( x=> x.wallet.id === wallet.id)
                            .map( ben => (
                                <Cardy item={ben} key={ben.id} />
                            ))
                        }
                    </div>
                ))
                        
                
            }
        </div>
    )
}

const Cardy = ({item}) => (
    <div>
        <img src={item.vector_full_path} width='60px' height='60px'/>
        <div>
            {item.name}                                        
        </div>
        <div>
            {item.description}                                        
        </div>
    </div>
)


export default Beneficios
