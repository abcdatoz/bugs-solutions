import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs,deleteBug, setBugMode, setBugID} from '../actions/bugsActions'
import {getSolutions} from '../actions/solutionsActions'
import { useHistory } from "react-router-dom";


import BugForm from './BugForm'
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

 

    //selectors
    const datosgenerales  = useSelector(state => state.datos)
    
    const bugs  = useSelector(state => state.bugs.lista)
    const bugsMode  = useSelector(state => state.bugs.mode)
    const soluciones = useSelector(state => state.solutions.lista)

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

  

    
    const modolista = (
        <>

            
          
                <a href="#" className="y-btn" onClick={ () => { add()   }}>+ </a>   

            
            
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
                                    <td> { sistemas.filter(x=>x.id == item.bug_sistema)[0].nombre } </td>
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
                : (<BugForm id={bugId}  />)
            }
            
        </>        
    )
    
        
    
}


export default Bug