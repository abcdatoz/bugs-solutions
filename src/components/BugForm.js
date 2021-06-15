import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs,addBug, editBug,  setBugMode} from '../actions/bugsActions'


const BugForm = () => {

    const [bugId, setBugId] = useState('')
    const [bug_address, setBug_address] = useState('')
    const [bug_description, setBug_description] = useState('')
    const [bug_image, setBug_image] = useState()
    const [bug_date, setBug_date] = useState(new Date())


    //selectors
    const bugs  = useSelector(state => state.bugs.lista)
    const bugsMode  = useSelector(state => state.bugs.mode)

    //dispatch
    const dispatch = useDispatch()


    useEffect(() => {        
        
        dispatch(getBugs())

    },[])

    

    const guardar = (e) => {
        e.preventDefault()
        
         let formData = new FormData()
         

         console.log(formData)

         formData.append('bug_address',bug_address)
         formData.append('bug_description',bug_description)        
         formData.append('bug_image', bug_image, bug_image.name);
         formData.append('bug_date',bug_date)
         
                 
        bugsMode === 'new' 
            ? dispatch(addBug(formData))
            : dispatch(editBug(formData, bugId))

    
        
         dispatch(setBugMode('list'))
        
    }



    return (
        <>
            <form>
                        


                <input 
                    type="text"
                    placeholder="ifugr?"
                    name="bug_address"
                    value={bug_address}
                    onChange={ e => setBug_address(e.target.value)}
                />
                <br/>

                <input 
                    type="text"
                    placeholder="what's the bug?"
                    name="bug_description"
                    value={bug_description}
                    onChange={ e => setBug_description(e.target.value)}
                />
                <br/>

                <div>
                <label for="start">fecha:</label>

                    <input type="date" 
                        id="start"                         
                        name = "bug_date"
                        value= {bug_date}
                        min="2021-01-01" max="2025-12-31" 
                        onChange={ e => setBug_date(e.target.value)}
                        />
                </div> 


                <br/>
                <input 
                    type="file"
                    placeholder="how's the bug?"
                    name="bug_image"
                    accept="image/png, image/jpeg"  
                    onChange={ e => setBug_image(e.target.files[0])}                    
                    required/>

                <br/>
                <button type="button" onClick={guardar}>Guardar</button>
                <button type="button" onClick={() => dispatch(setBugMode('list')) }>Cancelar</button>

            </form>
        </>
    )

}

export default BugForm