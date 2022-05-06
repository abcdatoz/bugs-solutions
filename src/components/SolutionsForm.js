import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSolutions,addSolution, editSolution,  setSolutionMode} from '../actions/solutionsActions'


const SolutionsForm = (props) => {

    const [solutionId, setSolutionId] = useState('')
    const [description, setDescription] = useState('')
    const [query, setQuery] = useState('')    
    const [image, setImage] = useState()
    const [file, setFile] = useState('')   
 
    const [mode, setMode] = useState('')

    //selectors
    const solutions  = useSelector(state => state.solutions.lista)
    const solutionsMode  = useSelector(state => state.solutions.mode)

    //dispatch
    const dispatch = useDispatch()


    useEffect(() => {        
        
        dispatch(getSolutions())
        

        if (props.id){

            setMode('edit')

            let record = solutions.filter(x=>x.id == props.id)[0]
            
            setSolutionId(props.id)
            setDescription(record.description)
            setQuery(record.query)
            setImage(record.image)            

        }else{
            setMode('new')
        }

    },[])

    

    const guardar = (e) => {
        e.preventDefault()
        
         let formData = new FormData()

         formData.append('bugId', props.idBug)
         formData.append('description', description)
         formData.append('query', query)        
         formData.append('image', image, image.name);         
        //  formData.append('file', file, file.name);        
         
         
                 
        solutionsMode === 'new' 
            ? dispatch(addSolution(formData))
            : dispatch(editSolution(formData, solutionId))
        
         dispatch(setSolutionMode('list'))
        
    }



    return (
        <>
            <form>

                mode: {solutionsMode} <br/>
                idsolu: {solutionId}<br/>
                <label for="Description">Descripción </label><br />
                <input 
                    type="text"
                    placeholder=".."
                    name="description"
                    value={description}
                    onChange={ e => setDescription(e.target.value)}
                />
                <br/>

                <label for="query">Query </label><br />
                <input 
                    type="text"
                    placeholder="any query?"
                    name="query"
                    value={query}
                    onChange={ e => setQuery(e.target.value)}
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

                <br/>
                {/* <label for="file">File </label><br />
                <input 
                    type="file"
                    placeholder="any file??"
                    name="file"
                    accept="image/png, image/jpeg"  
                    onChange={ e => setFile(e.target.files[0])}                    
                    required/>

                <br/> */}


                <br /><br />
                <button type="button" onClick={guardar}>Guardar</button>
                <button type="button" onClick={() => dispatch(setSolutionMode('list')) }>Cancelar</button>

            </form>
        </>
    )

}

export default SolutionsForm

