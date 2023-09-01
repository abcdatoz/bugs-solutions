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
  
  
/*

OleDbConnection conexion = null;
            DataSet dataSet = null;
            OleDbDataAdapter dataAdapter = null;
            string hoja = "hoja1";
            string archivo = "c://bin/carga.xlsx";
            string consultaHojaExcel = "Select * from [" + hoja + "$]";

            //esta cadena es para archivos excel 2007 y 2010
            string cadenaConexionArchivoExcel = "provider=Microsoft.ACE.OLEDB.12.0;Data Source='" + archivo + "';Extended Properties=Excel 12.0;";

            //para archivos de 97-2003 usar la siguiente cadena
            //string cadenaConexionArchivoExcel = "provider=Microsoft.Jet.OLEDB.4.0;Data Source='" + archivo + "';Extended Properties=Excel 8.0;";

            //Validamos que el usuario ingrese el nombre de la hoja del archivo de excel a leer
            if (string.IsNullOrEmpty(hoja))
            {
                MessageBox.Show("No hay una hoja para leer");
            }
            else
            {
                try
                {
                    //Si el usuario escribio el nombre de la hoja se procedera con la busqueda
                    conexion = new OleDbConnection(cadenaConexionArchivoExcel);//creamos la conexion con la hoja de excel
                    conexion.Open(); //abrimos la conexion
                    dataAdapter = new OleDbDataAdapter(consultaHojaExcel, conexion); //traemos los datos de la hoja y las guardamos en un dataSdapter
                    dataSet = new DataSet(); // creamos la instancia del objeto DataSet
                    dataAdapter.Fill(dataSet, hoja);//llenamos el dataset
                //    dataGridView1.DataSource = dataSet.Tables[0]; //le asignamos al DataGridView el contenido del dataSet
                    conexion.Close();//cerramos la conexion
                                     //dataGridView1.AllowUserToAddRows = false;       //eliminamos la ultima fila del datagridview que se autoagrega


                    //foreach (var row in dataSet.Tables[0].Rows)
                    //{
                    //    Console.WriteLine(row.ToString());
                    //}

                    int i = 0;

                    string sql;



                    sql = "delete from tiposcompras";
                    ejecutarsql(sql);

                    foreach (var row in dataSet.Tables[0].Rows)
                    {
                        

                        object compra = dataSet.Tables[0].Rows[i]["compra"];
                        object fecha = dataSet.Tables[0].Rows[i]["fecha"];
                        object proveedor = dataSet.Tables[0].Rows[i]["proveedor"];
                        object observacion = dataSet.Tables[0].Rows[i]["observacion"];
                        object bien = dataSet.Tables[0].Rows[i]["bien"];
                        object programa = dataSet.Tables[0].Rows[i]["programa"].ToString().Trim();
                        object cog= dataSet.Tables[0].Rows[i]["cog"].ToString().Trim();
                        object origen = dataSet.Tables[0].Rows[i]["origen"].ToString().Trim();
                        object precio = dataSet.Tables[0].Rows[i]["precio"];


                        sql = "insert into tiposcompras (id, fecha, proveedor, observaciones, tipocompra,bien, programa, cog, origeningreso,precio)"
                            + " values (" + compra
                            + ",'" + fecha + "'"
                            + ",'" + proveedor + "'"
                            + ",'" + observacion + "'"
                            + ",'materiales'"
                            + ",'" + bien + "'"
                            + ",'" + programa + "'"
                            + ",'" + cog + "'"
                            + ",'" + origen + "'"
                            + "," + precio
                            + ")";

                        ejecutarsql(sql);

                        i++;
                        
                    }

                    MessageBox.Show("done");


                }
                catch (Exception ex)
                {
                    //en caso de haber una excepcion que nos mande un mensaje de error
                    MessageBox.Show("Error, Verificar el archivo o el nombre de la hoja", ex.Message);
                }
            }
*/