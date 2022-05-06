import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDatos} from '../actions/datosActions'
import Modal from './Modal.js';
import ModalTwo from './ModalTwo';

import {getBugs,addBug, editBug,  setBugMode} from '../actions/bugsActions'

import Form, { FormContext } from './common/Form'
import FormInput from './common/FormInput'


const Home = () => {

  
    const [showModal, setShowModal] = useState(false)
    const [showModalConfirm, setShowModalConfirm] = useState(false)

    const [bugId, setBugId] = useState('')
    const [bug_address, setBug_address] = useState('')
    const [bug_description, setBug_description] = useState('')
    const [bug_image, setBug_image] = useState()
    const [bug_date, setBug_date] = useState(new Date())
  

    const [lista, setLista] = useState([
      {id:1, nombre: 'modulo'},
      {id:2, nombre: 'controlador'},
      {id:3, nombre: 'reporte'},
      {id:4, nombre: 'store procedure'},
      {id:5, nombre: 'fnc'},
    ])



    const bugsMode  = useSelector(state => state.bugs.mode)

    const [mode, setMode] = useState('new')

  
  //dispatch
  const dispatch = useDispatch()


  useEffect(() => {      
    dispatch(getDatos())    
  }, [])

     

  

  const guardar = (e) => {
    e.preventDefault()
    
     let formData = new FormData()
     

     

     formData.append('bug_address',bug_address)
     formData.append('bug_description',bug_description)        
     formData.append('bug_image', bug_image, bug_image.name);
     formData.append('bug_date',bug_date)
     
     


             
    bugsMode === 'new' 
        ? dispatch(addBug(formData))
        : dispatch(editBug(formData, bugId))


    
     dispatch(setBugMode('list'))
    
}


    const editar = (params) => {
      
    }
    
    const remove = (params) => {
      
      setBugId(params.id)
      setShowModalConfirm(true)
    }
    

 
 
 
    return (
    <div>
      
      this app will serve for...     
       

          


        
        

  
    </div>)
};


export default Home


/**
 *  

 * 
 */

  
//https://css-tricks.com/useful-nth-child-recipies/  
//https://codepen.io/saviomartin/pen/LYNgqKW
//https://freefrontend.com/css-cards//
  
  
