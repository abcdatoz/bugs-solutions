import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCatPlatillos,addCatPlatillo, editCatPlatillo,  setCatPlatilloMode} from '../../actions/categoriasPlatillosActions'
import { Container } from 'semantic-ui-react'


const CategoriaPlatilloForm = (props) => {

    const [catId, setCatId] = useState('')
    const [clave, setClave] = useState('')
    const [nombre, setNombre] = useState('')    
    
    const [mode, setMode] = useState('')

    //selectors
    const categorias  = useSelector(state => state.catPlatillos.lista)
    const categoriasMode  = useSelector(state => state.catPlatillos.mode)

    //dispatch
    const dispatch = useDispatch()


    useEffect(() => {        
        
        dispatch(getCatPlatillos())
        

        if (props.id){

            setMode('edit')

            let record = categorias.filter(x=>x.id == props.id)[0]
            
            setCatId(props.id)
            setClave(record.clave)
            setNombre(record.nombre)
            

        }else{

            setMode('new')
            
        }

    },[])

    

    const guardar = (e) => {
        e.preventDefault()
        
         let formData = new FormData()

        
        formData.append('clave', clave)
        formData.append('nombre', nombre)        
        
        //const { username, email, password, password2} = this.state

        let obj = {
            'clave': clave,
            'nombre': nombre,
        }
                 
        categoriasMode === 'new' 
            ? dispatch(addCatPlatillo (obj))
            : dispatch(editCatPlatillo(obj, catId))
        
         dispatch(setCatPlatilloMode('list'))
        
    }



    return (
        <Container>
            <form>

                
                <label for="Clave">Clave </label><br />
                <input 
                    type="text"
                    placeholder=".."
                    name="clave"
                    value={clave}
                    onChange={ e => setClave(e.target.value)}
                />
                <br/>

                <label for="nombre">Nombre </label><br />
                <input 
                    type="text"
                    placeholder="name...?"
                    name="nombre"
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                />
                <br/>

             

    


                <br /><br />
                <button type="button" onClick={guardar}>Guardar</button>
                <button type="button" onClick={() => dispatch(setCatPlatilloMode('list')) }>Cancelar</button>

            </form>
        </Container>
    )

}

export default CategoriaPlatilloForm

