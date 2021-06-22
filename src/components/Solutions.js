import React from 'react'
import {useSelector} from 'react-redux'
import {getDatos} from '../actions/datosActions'



import Resume from './Resume'

const registros = [{id: 1, sistemaId:1, solucion: 'solucion numero xyq'},
                    {id: 2, sistemaId:1, solucion: 'estatus de los procesos numero xyq asd'},
                    {id: 3, sistemaId:1, solucion: 'solucion numero xyq dasd '},
                    {id: 4, sistemaId:2, solucion: 'solucion numero xyqasd a'},
                    {id: 5, sistemaId:2, solucion: 'solucion numero xyq asd'},
                    {id: 6, sistemaId:2, solucion: 'solucion numero xyq'},
                    {id: 7, sistemaId:3, solucion: 'reiniciar el server numero xhfghg'},
                    {id: 8, sistemaId:3, solucion: 'solucion numero xyq'},
                    {id: 9, sistemaId:3, solucion: 'solucion numero xyq'},
                    {id: 10, sistemaId:1, solucion: 'cancelar am,ploiac numero xfgq'},
                    {id: 11, sistemaId:1, solucion: 'solucion numero xdf'},
                    {id: 12, sistemaId:1, solucion: 'solucion numero xyq'},
                    {id: 13, sistemaId:2, solucion: 'recalendarizaar numero xyq'},
                    {id: 14, sistemaId:3, solucion: 'solucion numero xyq'},
                    {id: 15, sistemaId:1, solucion: 'solucion numero xyq'},
                    {id: 16, sistemaId:2, solucion: 'autorizar ampliacion numero fgdxyq'},
                    {id: 17, sistemaId:3, solucion: 'solucion numgdfgedfgro xyq'},
                    {id: 18, sistemaId:1, solucion: 'solucion numero xyq'},
                    {id: 19, sistemaId:2, solucion: 'reclasificar el gasto fdfgnumero xyq'},
                    {id: 20, sistemaId:3, solucion: 'solucion ngdumgero xyq'},
                    {id: 21, sistemaId:1, solucion: 'solucion nudfgdfgmero xyq'},
                    {id: 22, sistemaId:2, solucion: 'solucion numero dgxyq'},
                    {id: 23, sistemaId:3, solucion: 'solucion numero dgxyq'}]

const sistemas = [
    {id:1, nombre:'sigmaver'},
    {id:2, nombre:'ticket'},
    {id:3, nombre:'deploy'},   
    ]

const Solution = () => {

    //selectors
    const datosgenerales  = useSelector(state => state.datos)

    // //dispatch
    // const dispatch = useDispatch()

    // //useEffect
    // useEffect(() => {               
    //     dispatch(getDatos())
    // },[])



    return (
        <>
            <Resume />


            {
                datosgenerales.idSystem == 0
                ? null 
                : (
                    <>
                        <table>
                            <thead>
                                <th width="30%">sistema</th>
                                <th>solucion</th>                        
                            </thead>
                            <tbody>
                            {
                                registros
                                .filter (x=>x.sistemaId == datosgenerales.idSystem)
                                .map (item => (
                                    <tr key={item.id}>
                                        <td> {sistemas.filter(x=>x.id == item.sistemaId)[0].nombre} </td>
                                        <td>{item.solucion}</td>
                                    </tr>
                                ))
                            } 
                            </tbody>
                        </table>
                    </>
                )

            }
            


            
            
        </>
    )
}

export default Solution