import React, {useState, useEffect} from 'react'

const teams = [
  {id:1, nombre:'Baltimore Orioles'},
  {id:2, nombre:'Boston Red Sox'},
  {id:3, nombre:'New York Yankees'},
  {id:4, nombre:'Tampa Bay Rays'},
  {id:5, nombre:'Toronto Blue Jays'},
  {id:6, nombre:'Chicago White Sox'},
  {id:7, nombre:'Cleveland Indians'},
  {id:8, nombre:'Detroit Tigers'},
  {id:9, nombre:'Kansas City Royals'},
  {id:10, nombre:'Minnesota Twins'},
  {id:11, nombre:'Houston Astros'},
  {id:12, nombre:'Los Angeles Angels'},
  {id:13, nombre:'Oakland Athletics'},
  {id:14, nombre:'Seattle Mariners'},
  {id:15, nombre:'Texas Rangers'},
  {id:16, nombre:'Atlanta Braves'},
  {id:17, nombre:'Miami Marlins'},
  {id:18, nombre:'New York Mets'},
  {id:19, nombre:'Philadelphia Phillies'},
  {id:20, nombre:'Washington Nationals'},
  {id:21, nombre:'Chicago Cubs'},
  {id:22, nombre:'Cincinnati Reds'},
  {id:23, nombre:'Milwaukee Brewers'},
  {id:24, nombre:'Pittsburgh Pirates'},
  {id:25, nombre:'St. Louis Cardinals'},
  {id:26, nombre:'Arizona Diamondbacks'},
  {id:27, nombre:'Colorado Rockies'},
  {id:28, nombre:'Los Angeles Dodgers'},
  {id:29, nombre:'San Diego Padres'},
  {id:30, nombre:'San Francisco Giants'}, 
]

const partidos = []
 

 
  
const Home = () => {

  const [matchs, setMatchs] = useState([])    
  const [rol, setRol] = useState([])
  const [jornada, setJornada] = useState(1)
  const [mode, setMode] = useState('new')

  const [tablageneral, setTablageneral] = useState([])



  useEffect(() => {
      

    let juegos = []
    partidos.forEach(item => {

     let eqA =  teams.filter(z => z.id === item.equipoA)
     let eqB =  teams.filter(z => z.id === item.equipoB)

     juegos.push({...item, nombreA: eqA[0].nombre, nombreB: eqB[0].nombre})
    })

    setMatchs(juegos)

    }, [])


    const start = () =>{

          
      let ids = teams.map(x=> x.id)
      let nuevos = []
      let excluidos = []

      let equiposA = teams
      let equiposB = teams


      for(let i=0; i < teams.length; i++){
              

        let jugados = getJuegosJugados(teams[i].id, matchs, nuevos )
        let pendientes= getPendientes(teams[i].id, ids, jugados )
       
      
        let excluir = excluidos.find(elemento => elemento === teams[i].id) 
        
        if (pendientes.length > 0 && excluir === undefined){          


          let j = Math.floor(Math.random() * pendientes.length)

          let puntosA = Math.floor(Math.random() * 4)
          let puntosB = Math.floor(Math.random() * 4)

          nuevos.push({
              equipoA: teams[i].id, 
              equipoB: pendientes[j],
              nombreA: equiposA.filter(z => z.id === teams[i].id)[0].nombre, 
              nombreB: equiposB.filter(z => z.id === pendientes[j])[0].nombre,
              puntosA: puntosA,
              puntosB: puntosB            
            }
          )
          excluidos.push(pendientes[j])
                    
          
        }
      }

      setRol(nuevos)
      setMode('sending')

  }

  const getJuegosJugados = (equipo, partidosjugados, rol) =>{
      let arreglo = []

      arreglo.push(equipo)

      partidosjugados.forEach(item =>{
        if (item.equipoA === equipo)
          arreglo.push(item.equipoB)
        
        if (item.equipoB === equipo)
          arreglo.push(item.equipoA)          

      })

      rol.forEach(item =>{
        arreglo.push(item.equipoA)
        arreglo.push(item.equipoB)
      })

      return arreglo

  }

  const getPendientes = (equipo, listaEquipos, listaJugados) =>{
    let arreglo = []
    listaEquipos.forEach(id => {

      //if (listaJugados.find(elemento => elemento == equipo) == undefined)      

      let yasejugo = listaJugados.find(elemento => elemento === id) 

      if ( yasejugo  === undefined)      
        arreglo.push(id)
       
    })

    return arreglo

  }


  const sendRolToPlay = () =>{
    let i=0

    let nuevorol = []

    rol.forEach(element => {
      
      i++

      nuevorol.push({
        jornada: jornada,
        consecutivo: i,
        equipoA: element.equipoA,
        equipoB: element.equipoB,
        nombreA: element.nombreA,
        nombreB: element.nombreB, 
        puntosA: element.puntosA,
        puntosB: element.puntosB
      })

      
    })

    
    i = jornada + 1

    setJornada(i)

    setMatchs([...matchs, ...nuevorol])

    setMode('new')
    setRol([])


    let arr = matchs
    
    let arrTabla = []

    teams.forEach(element => {
      
      let arrA = arr.filter(x => x.equipoA == element.id)
      let arrB = arr.filter(x => x.equipoB == element.id)

      let sumapuntos = 0     

      arrA.forEach(x => {
        sumapuntos  = sumapuntos + x.puntosA
      });

      arrB.forEach(y => {
        sumapuntos  = sumapuntos + y.puntosB
      });

      let data = {
        id: element.id,
        nombre: element.nombre,
        puntos: sumapuntos
      }

      arrTabla.push(data)

    });



    arrTabla.sort((a,b) => b.puntos - a.puntos)


    setTablageneral(arrTabla)

  }



  const modoNew = (
    <>
      <h3>mode: new</h3>
    </>
  )
 
  const modoRol = (
    <>
        <br/>
        nuevo rol, siguiente jornada: {jornada}
        {
              rol.map (item => (
                  <div key={item.id}>
                      {item.nombreA} vs {item.nombreB}                  
                  </div>
              ))
        }


        <table>
          <tr>
            <td>

                <table>
                    <thead>
                        <th>Jornada</th>
                        <th>Juego</th>
                        <th>A</th>
                        <th>vs</th>
                        <th>B</th>                        
                    </thead>
                    <tbody>
                      {
                            matchs.map ((item, indx) => (
                              <tr key={indx}>
                                <td>{item.jornada}</td>
                                <td>{item.consecutivo}</td>
                                <td>{teams.filter(x=> x.id === item.equipoA)[0].nombre} :  {item.puntosA} </td>
                                <td> vs </td>
                                <td>{teams.filter(x=> x.id === item.equipoB)[0].nombre} : {item.puntosB}</td>            
                              
                              </tr>
                            ))
                        } 
                      </tbody>
                  </table>

            </td>
            <td valign="top">
            <table>
                    <thead>
                        <th>Team</th>
                        <th>Puntos</th>                        
                    </thead>
                    <tbody>
                      {
                            tablageneral.map ((item, indx) => (
                              <tr key={indx}>
                                <td>{item.nombre}</td>
                                <td>{item.puntos}</td>
                              </tr>
                            ))
                        } 
                      </tbody>
                  </table>
            </td>
          </tr>
        </table>
       
    </>
  )

  const modoSubMenu = (
    <>
      <h3>mode: submenu</h3>
    </>
  )


  const renderSwitch = (params) => {

    switch (params) {
      case 'new':
        return modoNew
        break;
    
      case 'rol':
        return modoRol
        break;

      case 'submeno':
        return modoSubMenu
        break;
      default:
        return null
        break;
    }
  }

 
 
    return (
    <div>
      
      <button type="button" onClick={() => { setMode('new')}}>mode:new</button>
      <button type="button" onClick={() => { setMode('rol')}}>mode:rol</button>
      <button type="button" onClick={() => { setMode('submenu')}}>mode:submenu</button>
      
      {mode}

       {  renderSwitch(mode)       }  


    <br />
    
   
        

  

      
   


      
    </div>)
};


export default Home




  
//https://css-tricks.com/useful-nth-child-recipies/  
//https://codepen.io/saviomartin/pen/LYNgqKW
//https://freefrontend.com/css-cards//
  
  
