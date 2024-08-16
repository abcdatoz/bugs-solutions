import {useState, lazy, Suspense } from 'react'
import { Accordion, AccordionTitle, AccordionContent, Icon } from 'semantic-ui-react'

const Home3 = () => {


    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (e, titleProps) => {

        
        const { index } = titleProps        
        const newIndex = activeIndex === index ? -1 : index


        setActiveIndex(newIndex)


      }


      const Kitchen = lazy (() => delayForDemo(import('./Kitchen')))




  const delayForDemo = (promise) =>  {
    return new Promise( resolve => {
        setTimeout(resolve,3000);
    }).then(() => promise)
  }
      
  return (
    <div>
        
        <Suspense fallback={<div> loadingg....</div>}>
          <Kitchen />
        </Suspense>

        

        <Accordion fluid styled>
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          What is a dog?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          What kinds of dogs are there?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          How do you acquire a dog?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </AccordionContent>
      </Accordion>

    </div>
  )
}


const Estado = sequelize.define("estado",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  clave:    { type: Sequelize.STRING }, 
  nombre:    { type: Sequelize.STRING },
  
});


const Torneo = sequelize.define("torneo",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  //estado = models.ForeignKey(Estado, on_delete=models.SET_NULL, null=True)
  localidad:    { type: Sequelize.STRING }, 
  nombre:    { type: Sequelize.STRING },
  status:    { type: Sequelize.STRING },
  imagen:    { type: Sequelize.STRING },
  user_owner:    { type: Sequelize.INTEGER },
  
});



const Grupo = sequelize.define("grupo",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  //torneo = models.ForeignKey(Torneo, on_delete=models.SET_NULL, null=True)    
  nombre:    { type: Sequelize.STRING },        
  torneo_owner:    { type: Sequelize.STRING },
  
});

const Equipo = sequelize.define("equipo",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  // torneo = models.ForeignKey(Torneo, on_delete=models.SET_NULL, null=True)
  // grupo = models.ForeignKey(Grupo, on_delete=models.SET_NULL, null=True)
  nombre:    { type: Sequelize.STRING },        
  nombre_contacto:    { type: Sequelize.STRING },        
  correo_contacto:    { type: Sequelize.STRING },        
  telefono_contacto:    { type: Sequelize.STRING },        
  status:    { type: Sequelize.STRING },        
  torneo_owner:    { type: Sequelize.STRING },
  
});


const EquipoFoto = sequelize.define("equipoFoto",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  //equipo = models.ForeignKey(Equipo, on_delete=models.SET_NULL, null=True)        
  imagen:    { type: Sequelize.STRING },              
  
});

const EquipoEscudo = sequelize.define("equipoEscudo",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  //equipo = models.ForeignKey(Equipo, on_delete=models.SET_NULL, null=True)        
  imagen:    { type: Sequelize.STRING },              
  
});

const Jugador = sequelize.define("jugador",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  // torneo = models.ForeignKey(Torneo, on_delete=models.SET_NULL, null=True)
  // equipo = models.ForeignKey(Equipo, on_delete=models.SET_NULL, null=True)    
  nombre:    { type: Sequelize.STRING },              
  status:    { type: Sequelize.STRING },              
  
});

const Jornada = sequelize.define("jornada",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  // torneo = models.ForeignKey(Torneo, on_delete=models.SET_NULL, null=True)        
  nombre:    { type: Sequelize.STRING },              
  inicia:    { type: Sequelize.DATE },              
  termina:    { type: Sequelize.DATE },              
  aviso:    { type: Sequelize.STRING },              
  status:    { type: Sequelize.STRING },                      
});


const Juego = sequelize.define("juego",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  // torneo = models.ForeignKey(Torneo, on_delete=models.SET_NULL, null=True)    
  // jornada = models.ForeignKey(Jornada, on_delete=models.SET_NULL, null=True)   
  equipoA:    { type: Sequelize.UUID },              
  equipoB:    { type: Sequelize.UUID },              
  fecha:    { type: Sequelize.DATE },              
  hora:    { type: Sequelize.INTEGER },              
  minuto:    { type: Sequelize.INTEGER },              
  golesA:    { type: Sequelize.INTEGER },              
  golesB:    { type: Sequelize.INTEGER },              
  puntosA:    { type: Sequelize.INTEGER },              
  puntosB:    { type: Sequelize.INTEGER },                      
  status:    { type: Sequelize.STRING },                      
});



const Gol = sequelize.define("gol",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        
  // torneo = models.ForeignKey(Torneo, on_delete=models.SET_NULL, null=True)    
  // juego = models.ForeignKey(Juego, on_delete=models.SET_NULL, null=True)    
  // equipo = models.ForeignKey(Equipo, on_delete=models.SET_NULL, null=True)    
  // jugador = models.ForeignKey(Jugador, on_delete=models.SET_NULL, null=True)     
  goles:    { type: Sequelize.INTEGER },              
  tarjetas_amarillas:    { type: Sequelize.INTEGER },              
  tarjeta_roja:    { type: Sequelize.INTEGER },              
              
});

const Premio = sequelize.define("premio",{

  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },        

  nombre:    { type: Sequelize.STRING },              
  cantidad:    { type: Sequelize.INTEGER },                      
              
});








export default Home3