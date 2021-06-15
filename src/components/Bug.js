import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs,addBug,editBug,deleteBug, setBugMode} from '../actions/bugsActions'

import BugForm from './BugForm'

 
/**
 * https://codesandbox.io/s/7m66w7xn90?file=/src/index.js:1269-1285
 * https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
 * https://stackoverflow.com/questions/60370260/how-to-fix-failed-to-set-the-value-property-on-htmlinputelement-for-react
 * https://stackoverflow.com/questions/41610811/react-js-how-to-send-a-multipart-form-data-to-server
 * https://github.com/expressjs/multer/blob/master/README.md
 * 
 * https://www.derpturkey.com/node-multipart-form-data-explained/
 * 
 * https://cssinjs.org/?v=v10.6.0 
 * https://www.digitalocean.com/community/tutorials/how-to-share-state-across-react-components-with-context
 */
 

const Bug = () => {


    //states
    const [bugId, setBugId] = useState('')
    const [bug_address, setBug_address] = useState('')
    const [bug_description, setBug_description] = useState('')
    const [bug_image, setBug_image] = useState()
    const [bug_date, setBug_date] = useState(new Date())
    const [mode, setMode] = useState('list')

 

    //selectors
    const bugs  = useSelector(state => state.bugs.lista)
    const bugsMode  = useSelector(state => state.bugs.mode)

    //dispatch
    const dispatch = useDispatch()


    useEffect(() => {        
        
        dispatch(getBugs())
        dispatch(setBugMode('list'))

    },[])

 



     

    const add = () =>{        
        //setMode('new')

        
        dispatch(setBugMode('new'))
        
        cleanData()        
    }

    const editar = (item) => {

        //setMode('edit')        
        dispatch(setBugMode('edit'))

        setBug_address(item.bug_address)
        setBug_description(item.bug_description)
        setBug_image(item.bug_image)
        setBugId(item.id)
    }

    const remove = (id) => {
        dispatch(deleteBug(id))
        dispatch(getBugs())        
    }


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

        setMode('list')

    }


    const cancelar = () =>{
        
        setMode('list')

        cleanData()
      
    }

    const cleanData = () =>{
        setBug_address('')
        setBug_description('')
        setBug_image('')        
    }

    
    const modolista = (
        <>

          
            <div className="y-container">

                <div className="y-item">
                    <h4>Torneo Fut 7 Dominical </h4>
                    <h5>San Miguel  </h5>
                    <a href="#" className="y-btn">Cambiar de Torneo</a>
                </div>

                <button type="button" onClick={add}>  +   {bugsMode}</button>  
                <button type="button"> Regresar </button>
                
                

                
                
                <div className="y-item">
                    <ul>
                        <li>32 equipos</li>    
                        <li>7 jorandas jugadas</li>    
                        <li>avg : 65 goles por jornada</li>    
                    </ul> 
                </div>
            </div>

            
             


                <div className="x-container">
                    {
                        bugs.map ((item,ndx) => (
                            <div key={item.id} className="x-card">
                                <div className="x-box">
                                <div className="x-content">
                                    <h2><img  src={item.url} width="100" height="100"/></h2>
                                    <h3>{item.bug_date.substring(0,10)}</h3>
                                    <p>{item.bug_address} <br/> {item.bug_description}</p>
                                    <a href="#">Read More</a>
                                    <br/>                                    
                                    <button type="button" onClick={ () => editar(item)}>editar</button>
                                    <button type="button" onClick={ () => remove(item.id)}>trash</button>
                                </div>
                                </div>
                            </div>                     

                        ))
                    }
                    
                </div>


        </>
    )

   


    return (
        <>
            <h3>bugs</h3>


            {
                bugsMode === 'list' 
                ? modolista
                : (<BugForm />)
            }

            

            <br />
            {/* <ul>                
                <li>aplicar css</li>
                <li>asignar iconos</li>
                <li>give style to the nav</li>
                <li>----------------</li>                
                <li>add solutions</li>
                <li>https://es.stackoverflow.com/questions/437494/error-al-enviar-prop-error-too-many-re-renders-react-limits-the-number-of-ren</li>
                <li>https://www.cronj.com/blog/upload-image-nodejs-expressjs-using-javascript/</li>
            </ul> */}

            
        </>        
    )
    
        
    
}


export default Bug