import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs, setBugID} from '../actions/bugsActions'
import {getSolutions,deleteSolution,setSolutionMode} from '../actions/solutionsActions'
import { useHistory } from "react-router-dom";

import SolutionsForm  from './SolutionsForm'
import './Solutions.css';

const Solution = () => {



    //states
    const [idSolution, setIdSolution] = useState('')

    //selectors
    const bugs  = useSelector(state => state.bugs.lista)
    const idBug  = useSelector(state => state.bugs.idBug)
    const solutions  = useSelector(state => state.solutions.lista)
    const solutionsMode  = useSelector(state => state.solutions.mode)




    let history = useHistory();

    //dispatch
    const dispatch = useDispatch()

    
    
    

     //useEffect
     useEffect(() => {        
        dispatch(getSolutions())
        dispatch(getBugs())        

    },[])


    const regresar = () => {
        dispatch(setBugID(''))
        history.push("/bugs")
    }



    const subheader = (
        <>
            <div className="wrapper">
                <div className="grid-item">
                    <img  src={ bugs.filter(x=>x.id == idBug)[0].url } width="120" height="120"/>
                    
                </div>
                <div className="grid-item">
                    What is it?<br />
                    { bugs.filter(x=>x.id == idBug)[0].bug_description }     
                </div>
                <div className="grid-item">
                    Where is it?<br />
                    { bugs.filter(x=>x.id == idBug)[0].bug_address }    
                </div>
                <div className="grid-item">
                    When was it?<br />
                    { bugs.filter(x=>x.id == idBug)[0].bug_date.substr(0,10) }  
                </div>
                <div><button type="button" onClick={ () => regresar()}>Regresar</button></div>
            </div>        
        </> 
    )

    const add = () =>{
        
        setIdSolution(null)
        dispatch(setSolutionMode('new'))                
    }


    const editar = (item) =>{
        setIdSolution(item.id)
        dispatch(setSolutionMode('edit'))        
    }


    const remove = (item) =>{
        dispatch(deleteSolution(item.id))
        dispatch(getSolutions())        
    }

        
     
    const modolista = (
        <>

            
          
                <a href="#" className="y-btn" onClick={ () => { add()   }}>+ </a>   

            
            
                <table>
                    <thead>
                        <tr>
                            
                            <th>Solution</th>
                            <th>image</th>
                            <th>query</th>
                            <th>file</th>                            
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                            solutions                            
                            .filter(x => x.bugId === idBug)
                            .map ((item,ndx) => (
                                <tr>
                                    
                                    <td>{item.description} </td>
                                    <td><img  src={item.url} width="75" height="75"/> </td>
                                    <td>{item.query} </td>
                                    <td>{item.file} </td>                                    
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
            {subheader}            

            
            


            
            {
                solutionsMode === 'list' 
                ? modolista
                : (<SolutionsForm id={idSolution} idBug={idBug} />)
            }

            
        </>
    )
}

export default Solution