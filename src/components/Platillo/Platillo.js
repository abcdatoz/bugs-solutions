import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCatPlatillos} from '../../actions/categoriasPlatillosActions'
import {getPlatillos, deletePlatillo, setPlatilloMode} from '../../actions/platillosActions'
import PlatilloForm from './PlatilloForm'
import { useHistory } from "react-router-dom";
import { Container } from 'semantic-ui-react'

const Platillo = () => {



    //states
    const [idPlatillo, setIdPlatillo] = useState('')

    //selectors
    const categorias  = useSelector(state => state.catPlatillos.lista)    

    const platillos  = useSelector(state => state.platillos.lista)
    const platillosMode  = useSelector(state => state.platillos.mode)



 
    //dispatch
    const dispatch = useDispatch()
    
     //useEffect
     useEffect(() => {        
        dispatch(getCatPlatillos())
        dispatch(getPlatillos())
        dispatch(setPlatilloMode('list'))

    },[])


    
    const add = () =>{
        
        setIdPlatillo(null)
        dispatch(setPlatilloMode('new'))                
    }


    const editar = (item) =>{
        setIdPlatillo(item.id)
        dispatch(setPlatilloMode('edit'))        
    }


    const remove = (item) =>{
        dispatch(deletePlatillo(item.id))
        dispatch(getPlatillos())        
    }

        
     
    const modolista = (
        <Container>

            
          
                <a href="#" className="y-btn" onClick={ () => { add()   }}>+ </a>   

            
            
                <table>
                    <thead>
                        <tr>
                            
                            <th>Clave</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>                            
                            <th>Calorias</th>                            
                            <th>preparacion en minutos</th>                            
                            <th>imagen</th>                            
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                            platillos                                                        
                            .map ((item) => (
                                <tr key={item.id}>
                                    
                                    <td>{item.clave} </td>                                    
                                    <td>{item.nombre} </td>
                                    <td>{item.descripcion} </td>                                    
                                    <td>{item.calorias} </td>                                    
                                    <td>{item.minutospreparacion} </td>                                    
                                    <td><img  src={item.url} width="75" height="75"/> </td>
                                    <td>
                                        <button type="button" onClick={ () => editar(item)}>editar</button>
                                        <button type="button" onClick={ () => remove(item)}>trash</button> 
                                    </td>
                                    
                                </tr>                        
                            ))
                        }
                    </tbody>
                </table>

                 


        </Container>
    )





    return (
        <>
            
            

            
            {
                platillosMode === 'list' 
                ? modolista
                : (<PlatilloForm id={idPlatillo}  />)
            }

            
        </>
    )
}

export default Platillo