import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDatos, setDatos} from '../actions/datosActions'




const sistemas = [
    {id:1, nombre:'sigmaver'},
    {id:2, nombre:'ticket'},
    {id:3, nombre:'deploy'},   
  ]



const Resume = () => {


    //usestates
    const [syst, setSyst] = useState('')

    //selectors
    const datosgenerales  = useSelector(state => state.datos)

    //dispatch
    const dispatch = useDispatch()
    

    
    useEffect(() => {               
        //dispatch(getDatos())
        //dispatch(setDatos({idSystem: 0, nameSystem: 'none'}))

    },[])

    return (
        <>
            {
                datosgenerales.idSystem == 0
                ?  (
                    <>
                      <form>

                            <div className="form-group">
                                <label>Subsistema</label>
                                <select 
                                    className="form-control"
                                    onChange={ e => setSyst(e.target.value) } 
                                    name="syst"
                                    value={syst}>
                                    <option value="null">Seleccine un susbsistema</option>                                
                                    {sistemas.map(x => (
                                    <option key={x.id} value={x.id}>
                                       {x.id} {x.nombre}
                                    </option>
                                ))}
                                </select>
                            </div>
            
             
                            <button type="button" onClick={() => { dispatch(setDatos({idSystem: syst, nameSystem: sistemas.filter(x => x.id == syst)[0].nombre })) }  }>Guardar</button>
                            
                            
            
                        </form>
                    </>

                )
                : (
                    <div className= "y-container">
                        <button type="button" onClick={ () => { dispatch(setDatos({idSystem: 0, nameSystem: ''}))  }}>  switch  </button>  
                        <div className="y-item">{ datosgenerales.idSystem } {datosgenerales.nameSystem}</div>
                        
                        
                        <div className="y-item">C side</div>
                        <div className="y-item">D side</div>
                    </div>
                )
            }



        </>
    )
}

export default Resume