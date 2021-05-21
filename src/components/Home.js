import React, {useState, useEffect} from 'react'

const teams = [
  {id: 1, nombre:'el ame'},
  {id: 2, nombre:'los pumas'},
  {id: 3, nombre:'gdl'},
  {id: 4, nombre:'mty'},
  {id: 5, nombre:'atlas'},
  {id: 6, nombre:'puebla'},
  {id: 7, nombre:'toluca'},
  {id: 8, nombre:'santos'},
  {id: 9, nombre:'tigres'},
  {id: 10, nombre:'indios'},
  {id: 11, nombre:'xolos'},
  {id: 12, nombre:'tiburones'},
  {id: 13, nombre:'jaguares'},
  {id: 14, nombre:'necaxa'},
]

const partidos = []
 

 
  
const Home = () => {

  const [matchs, setMatchs] = useState([])    
  const [rol, setRol] = useState([])
  const [jornada, setJornada] = useState(1)
  const [mode, setMode] = useState('new')


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
       
      
        let excluir = excluidos.find(elemento => elemento == teams[i].id) 
        
        if (pendientes.length > 0 && excluir == undefined){          


          let j = Math.floor(Math.random() * pendientes.length)

          nuevos.push({
              equipoA: teams[i].id, 
              equipoB: pendientes[j],
              nombreA: equiposA.filter(z => z.id === teams[i].id)[0].nombre, 
              nombreB: equiposB.filter(z => z.id === pendientes[j])[0].nombre})
          excluidos.push(pendientes[0])
                    
          
        }
      }

      setRol(nuevos)
      setMode('sending')

  }

  const getJuegosJugados = (equipo, partidosjugados, rol) =>{
      let arreglo = []

      arreglo.push(equipo)

      partidosjugados.forEach(item =>{
        if (item.equipoA == equipo)
          arreglo.push(item.equipoB)
        
        if (item.equipoB == equipo)
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

      let yasejugo = listaJugados.find(elemento => elemento == id) 

      if ( yasejugo  == undefined)      
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
        nombreB: element.nombreB
      })

      
    })

    
    i = jornada + 1

    setJornada(i)

    setMatchs([...matchs, ...nuevorol])

    setMode('new')
    setRol([])




  }

 
    return (
    <div>
      
      

       {
         mode == 'new'
          ? (
            <h3>... <button type="button" onClick={start}>start</button></h3>
          ) 
          : (<h3>... <button type="button" onClick={sendRolToPlay}>add</button></h3>)

       }     


    <br />
      nuevo rol, siguiente jornada: {jornada}
    {
          rol.map (item => (
              <div key={item.id}>
                  {item.nombreA} vs {item.nombreB}                  
              </div>
          ))
    }



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
                                <td>{item.nombreA}</td>
                                <td> vs </td>
                                <td>{item.nombreB}</td>            
                              
                              </tr>
                            ))
                        } 
                    </tbody>
                </table>


   


      
    </div>)
};


export default Home




  
  
  
  
