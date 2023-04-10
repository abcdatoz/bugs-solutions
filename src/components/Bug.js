import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs,deleteBug, setBugMode, setBugID} from '../actions/bugsActions'
import {getSolutions} from '../actions/solutionsActions'
import { useHistory } from "react-router-dom";

import { Button, Form, Icon, Input, Modal as MyModal } from 'semantic-ui-react'

import BugForm from './BugForm'
import BugModal from './BugModal'
import Resume from './Resume'

 
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
 

 const sistemas = [
    {id:1, nombre:'sigmaver'},
    {id:2, nombre:'ticket'},
    {id:3, nombre:'deploy'},   
  ]

const Bug = () => {

    
    //states
    const [bugId, setBugId] = useState('')

    const [selectedModal, setModal] = useState(false)

    //selectors
    const datosgenerales  = useSelector(state => state.datos)
    
    const bugs  = useSelector(state => state.bugs.lista)
    const bugsMode  = useSelector(state => state.bugs.mode)
    const soluciones = useSelector(state => state.solutions.lista)



    
    const [bug_address, setBug_address] = useState('')
    const [bug_description, setBug_description] = useState('')
    const [bug_image, setBug_image] = useState()
    const [bug_date, setBug_date] = useState(new Date())
    const [bug_sistema, setBug_sistema] = useState(0)


    //dispatch
    const dispatch = useDispatch()


    let history = useHistory();

    useEffect(() => {        
        
        dispatch(getBugs())
        dispatch(setBugMode('list'))

    },[])

 
    const add = () =>{                
        setBugId(null)
        dispatch(setBugMode('new'))                
    }

    const editar = (item) => {
        
        setBugId(item.id)
        dispatch(setBugMode('edit'))        
        
    }

    const remove = (item) => {
        dispatch(deleteBug(item.id))
        dispatch(getBugs())        
    }

 
    const addSolution = (item) => {
        dispatch(setBugID(item.id))

        history.push("/solutions");
    }

    const openModal = () => {                  
        console.log ('se abre')    
        setModal(true)
    }
  
    const closeModal = () => {
        setModal(false)        
    }

    const guardar = () => {

        e.preventDefault()
        
         
                
    }
    
    const modolista = (
        <>

                <a href="#" className="y-btn" onClick={ () => { openModal()   }}>+ </a>   

                <table>
                    <thead>
                        <tr>
                            
                            <th>image</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>sistema</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                            bugs                            
                            .map ((item,ndx) => (
                                <tr>
                                    
                                    <td><img  src={item.url} width="30" height="30"/> </td>
                                    <td>{item.bug_address} </td>
                                    <td>{item.bug_description} </td>
                                    <td>{item.bug_date.substr(0,10)} </td>
                                    {/* <td> { sistemas.filter(x=>x.id == item.bug_sistema)[0].nombre } </td> */}
                                    <td> </td>
                                    <td>
                                        <button type="button" onClick={ () => addSolution(item)}>Solutions</button>
                                        <button type="button" onClick={ () => editar(item)}>editar</button>
                                        <button type="button" onClick={ () => remove(item)}>trash</button> 
                                    </td>
                                    
                                </tr>                        
                            ))
                        }
                    </tbody>
                </table>

                 
                 <ul>
                     {
                         soluciones.map ( (sol) => (
                             <li> {sol.description} ({ sol.query }) </li>
                         ) )
                     }
                 </ul>


        </>
    )

    //.filter(x=>x.bug_sistema == datosgenerales.idSystem)

   //<Resume />


    return (
        <>

            
            <br />
            <h3>bugs</h3>
            

            {
                bugsMode === 'list' 
                ? modolista
                : (
                    <div>asd</div>
                   
                
                    )

            }



            {/* <MyModal basic open={selectedModal}>
                        <MyModal.Header>Editar oficio </MyModal.Header>
                        <MyModal.Content>
                            <Form>     
                        
                            <label>Fecha</label><br />
                <Form.Field>                        
                    <input type="date" 
                        id="start"                         
                        name = "bug_date"
                        value= {bug_date}
                        min="2021-01-01" max="2025-12-31" 
                        onChange={ e => setBug_date(e.target.value)}
                        />
                </Form.Field>



                <br/>         
                <label>Descripcion</label><br />
                <Form.Field>                        
                    <input type="text"  
                            name = "bug_description" 
                            value= {bug_description} 
                            onChange={ e => setBug_description(e.target.value)}                         
                    />
                </Form.Field>

                <br/>         
                <label>address</label><br />
                <Form.Field>                        
                    <input type="text"  
                            name = "bug_address" 
                            value= {bug_address} 
                            onChange={ e => setBug_address(e.target.value)}                         
                    />
                </Form.Field>

                            

                            </Form>
                        </MyModal.Content>

                        <MyModal.Actions>
                            <Button basic color='green' inverted  onClick={ () => guardar() } >
                                <Icon name='checkmark' /> Guardar
                            </Button>

                            <Button basic color='red' inverted onClick={closeModal}>
                                <Icon name='remove' /> Cancelar
                            </Button>            
                        </MyModal.Actions>    

                    </MyModal> */}


                    <MyModal
                    trigger={<Button>Show Modal</Button>}
                    header='Reminder!'
                    content='Call Benjamin regarding the reports.'
                    actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
                    />
            
        </>        
    )
    
        
    
}


export default Bug