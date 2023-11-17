import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPlatillos,addPlatillo, editPlatillo, setPlatilloMode} from '../../actions/platillosActions'
import {getCatPlatillos} from '../../actions/categoriasPlatillosActions'
import { Container } from 'semantic-ui-react'


const PlatilloForm = (props) => {

    const [platilloId, setPlatilloId] = useState('')
    
    const [clave, setClave] = useState('')    
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [calorias, setCalorias] = useState('')
    const [minutospreparacion, setMinutosPreparacion] = useState('')
    const [image, setImage] = useState()
    const [categoriaId, setCategoriaId] = useState('')   
 


    //selectors
    const platillos  = useSelector(state => state.platillos.lista)
    const categorias  = useSelector(state => state.catPlatillos.lista)
    const platillosMode  = useSelector(state => state.platillos.mode)

    //dispatch
    const dispatch = useDispatch()


    useEffect(() => {        
        

        dispatch(getCatPlatillos())

        dispatch(getPlatillos())
        

        if (props.id){

            let record = platillos.filter(x=>x.id == props.id)[0]
            
            setPlatilloId(props.id)
            setClave(record.clave)
            setNombre(record.nombre)
            setDescripcion(record.descripcion)
            setCalorias(record.calorias)
            setMinutosPreparacion(record.minutospreparacion)
            setImage(record.imagen)            
        }

    },[])

    

    const guardar = (e) => {
        e.preventDefault()
        
         let formData = new FormData()

         formData.append('categoriasPlatilloId', categoriaId)
         formData.append('clave', clave)
         formData.append('nombre', nombre)
         formData.append('descripcion', descripcion)
         formData.append('calorias', calorias)        
         formData.append('minutospreparacion', minutospreparacion)        
         formData.append('imagen', image, image.name);         
        //  formData.append('file', file, file.name);        
         
         
                 
        platillosMode === 'new' 
            ? dispatch(addPlatillo(formData))
            : dispatch(editPlatillo(formData, platilloId))
        
         dispatch(setPlatilloMode('list'))
        
    }



    return (
        <Container>
            <form>


                <div>
                <label for="start">Categoria </label><br />
                <select 
                    className="form-control"
                    onChange={ e => setCategoriaId(e.target.value) } 
                    name="categoriaId"
                    value={categoriaId}>
                    <option value="null">Seleccione una categoria</option>                                
                    {categorias.map(x => (
                    <option key={x.id} value={x.id}>
                        {x.clave} {x.nombre}
                    </option>
                ))}
                </select>

                </div>

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

                <label for="Descripcion">Descripción </label><br />
                <input 
                    type="text"
                    placeholder=".."
                    name="descripcion"
                    value={descripcion}
                    onChange={ e => setDescripcion(e.target.value)}
                />
                <br/>
                
                <label for="calorias">Calorias </label><br />
                <input 
                    type="text"
                    placeholder=".."
                    name="calorias"
                    value={calorias}
                    onChange={ e => setCalorias(e.target.value)}
                />
                <br/>

                <label for="minutospreparacion">Minutes </label><br />
                <input 
                    type="text"
                    placeholder="min"
                    name="minutospreparacion"
                    value={minutospreparacion}
                    onChange={ e => setMinutosPreparacion(e.target.value)}
                />
                <br/>

                
                <br/>
                <label for="image">Image </label><br />
                <input 
                    type="file"
                    placeholder="any image??"
                    name="image"
                    accept="image/png, image/jpeg"  
                    onChange={ e => setImage(e.target.files[0])}                    
                    required/>

                <br/>

               


                <br /><br />
                <button type="button" onClick={guardar}>Guardar</button>
                <button type="button" onClick={() => dispatch(setPlatilloMode('list')) }>Cancelar</button>

            </form>
        </Container>
    )

}

export default PlatilloForm

