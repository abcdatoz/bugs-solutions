import React, {useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs,addBug,editBug,deleteBug} from '../actions/bugsActions'
import ReactDOM from 'react-dom'
 
/**
 * https://codesandbox.io/s/7m66w7xn90?file=/src/index.js:1269-1285
 * https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
 * https://stackoverflow.com/questions/60370260/how-to-fix-failed-to-set-the-value-property-on-htmlinputelement-for-react
 * https://stackoverflow.com/questions/41610811/react-js-how-to-send-a-multipart-form-data-to-server
 * https://github.com/expressjs/multer/blob/master/README.md
 */


const useForceUpdate = () =>  useState()[1]

const Bug = () => {


    //states
    const [bugId, setBugId] = useState('')
    const [bug_address, setBug_address] = useState('')
    const [bug_description, setBug_description] = useState('')
    const [bug_image, setBug_image] = useState()
    const [bug_date, setBug_date] = useState(new Date())
    const [mode, setMode] = useState('list')




    //refs
    const fileInput = useRef(null)
    const forceUpdate = useForceUpdate()

    //selectors
    const bugs  = useSelector(state => state.bugs.lista)

    //dispatch
    const dispatch = useDispatch()


    useEffect(() => {
        
        dispatch(getBugs())

    }, [bugs])

/*
    useEffect (()=> {
        window.addEventListener("keyup", clickFileInput)
        return () => window.removeEventListener("keyup",clickFileInput)
    })

    function clickFileInput(e){
        if(fileInput.current.nextsibling.contains(document.activeElement)){
            if(e.keyCode === 32){
                fileInput.current.click()
            }
        }
    }

    function fileNames() {
        const { current } = fileInput;
    
        if (current && current.files.length > 0) {
          let messages = [];
          for (let file of current.files) {
            messages = messages.concat(<p key={file.name}>{file.name}</p>);
          }
          return messages;
        }
        return null;
      }
    
*/

    const add = () =>{        
        setMode('new')
        cleanData()        
    }

    const editar = (item) => {

        setMode('edit')

        setBug_address(item.bug_address)
        setBug_description(item.bug_description)
        setBug_image(item.bug_image)
        setBugId(item.id)
    }

    const remove = (id) => {
        dispatch(deleteBug(id))
    }


    const guardar = (e) => {
        e.preventDefault()
        let registro = {
            bug_address,
            bug_description,
            bug_image,
            bug_date
        }


        const formData = new FormData()

        formData.append('bug_address',bug_address)
        formData.append('bug_description',bug_description)
        formData.append('bug_image', fileInput.current.files)
        formData.append('bug_date',bug_date)

        mode === 'new' 
            ? dispatch(addBug(formData))
            : dispatch(editBug(registro, bugId))
        

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
          <button type="button" onClick={add}>  + Nuevo</button>  
                <table>
                    <thead>
                        <th>where is the bug?</th>
                        <th>what is it?</th>
                        <th>how is it?</th>
                        <th>when is it?</th>
                        <th>edit</th>
                        <th>remove</th>
                    </thead>
                    <tbody>
                        {
                            bugs.map (item => (
                                <tr key={item.id}>
                                    <td>{item.bug_address}</td>
                                    <td>{item.bug_description}</td>
                                    <td>{item.bug_image}</td>
                                    <td>{item.bug_date}</td>
                                    <td> <button type="button" onClick={ () => editar(item)}>editar</button></td>
                                    <td> <button type="button" onClick={ () => remove(item.id)}>trash</button></td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </>
    )

    const formulario = (
        <>


 


         
         <form>
                <input 
                    type="text"
                    placeholder="where is the bug?"
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


                <input 
                    type="file"
                    placeholder="how's the bug?"
                    name="bug_image"
                    ref={fileInput}
                    //onChange={forceUpdate}                    
                />
                 

                <br/>
                <button type="button" onClick={guardar}>Guardar</button>
                <button type="button" onClick={cancelar}>Cancelar</button>


            </form>
        </>
    )



    return (
        <>
            <h3>bugs</h3>


            {
                mode === 'list' 
                ? modolista
                : formulario
            }

            

            <br />
            <ul>
                <li>formatear fechas</li>
                <li>aplicar css</li>
                <li>asignar iconos</li>
                <li>give style to the nav</li>
                <li>----------------</li>
                <li>guardar images</li>
                <li>add solutions</li>
                <li>https://es.stackoverflow.com/questions/437494/error-al-enviar-prop-error-too-many-re-renders-react-limits-the-number-of-ren</li>
                <li>https://www.cronj.com/blog/upload-image-nodejs-expressjs-using-javascript/</li>
            </ul>

            
        </>        
    )
    
        
    
}


export default Bug