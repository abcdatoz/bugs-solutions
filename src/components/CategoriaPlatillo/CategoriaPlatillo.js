import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCatPlatillos, deleteCatPlatillo, setCatPlatilloMode} from '../../actions/categoriasPlatillosActions'
import CategoriaPlatilloForm from './CategoriaPlatilloForm'
import { useHistory } from "react-router-dom";

const CategoriaPlatillo = () => {



    //states
    const [idCategoria, setIdCategoria] = useState('')

    //selectors
    // const bugs  = useSelector(state => state.bugs.lista)
    // const idBug  = useSelector(state => state.bugs.idBug)

    const categorias  = useSelector(state => state.catPlatillos.lista)
    const categoriasMode  = useSelector(state => state.catPlatillos.mode)




    let history = useHistory();

    //dispatch
    const dispatch = useDispatch()

    
    
    

     //useEffect
     useEffect(() => {        
        dispatch(getCatPlatillos())
        dispatch(setCatPlatilloMode('list'))

    },[])


    
    const add = () =>{
        
        setIdCategoria(null)
        dispatch(setCatPlatilloMode('new'))                
    }


    const editar = (item) =>{
        setIdCategoria(item.id)
        dispatch(setCatPlatilloMode('edit'))        
    }


    const remove = (item) =>{
        dispatch(deleteCatPlatillo(item.id))
        dispatch(getCatPlatillos())        
    }

        
     
    const modolista = (
        <>

            
          
                <a href="#" className="y-btn" onClick={ () => { add()   }}>+ </a>   

            
            
                <table>
                    <thead>
                        <tr>
                            
                            <th>Clave</th>
                            <th>Nombre</th>
                            <th>Status</th>                            
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                            categorias                                                        
                            .map ((item) => (
                                <tr key={item.id}>
                                    
                                    <td>{item.clave} </td>                                    
                                    <td>{item.nombre} </td>
                                    <td>{item.status} </td>                                    
                                    <td>
                                        <button type="button" onClick={ () => editar(item)}>editar</button>
                                        <button type="button" onClick={ () => remove(item)}>trash</button> 
                                    </td>
                                    
                                </tr>                        
                            ))
                        }
                    </tbody>
                </table>

                 


        </>
    )





    return (
        <>
            
            
            


            
            {
                categoriasMode === 'list' 
                ? modolista
                : (<CategoriaPlatilloForm id={idCategoria}  />)
            }

            
        </>
    )
}

export default CategoriaPlatillo