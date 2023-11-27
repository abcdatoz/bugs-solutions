import { Container, Row } from 'react-bootstrap'
import { Grid, Icon, Table } from 'semantic-ui-react'



const Tablasemantic = () => {

    const GridColoredRowExample = () => (
        <Grid padded>
            <Grid.Row color={'blue'} >
              <Grid.Column># Viaje</Grid.Column>
              <Grid.Column>Cliente</Grid.Column>
              <Grid.Column>Cantidad</Grid.Column>
              <Grid.Column>Precio</Grid.Column>
              <Grid.Column>Monto</Grid.Column>
              <Grid.Column>Observaciones</Grid.Column>
              <Grid.Column>Costos Totales </Grid.Column>
              <Grid.Column>Importe Facturado</Grid.Column>
              <Grid.Column>Importe Cobrado</Grid.Column>
              <Grid.Column>Importe por Cobrar</Grid.Column>
            </Grid.Row>
        </Grid>
      )

      const registros = [
        {
            viaje: 'v001',  
            cliente: 'Villamex',
            fecha: '02/15/2023',
            cantidad: 10,
            precio: "$45,000",
            monto: "$450,000",
            obs: 'sin observaciones',
            costos: "$250,000",
            facturas: "$500,000",
            cobros: "$300,000",
            pendiente: "$200,000"
        },
        {
            viaje: 'v002',  
            cliente: 'Villamex',
            fecha: '02/24/2023',
            cantidad: 15,
            precio: "$32,000",
            monto: "$480,000",
            obs: 'a consignación',
            costos: "$300,000",
            facturas: "$450,000",
            cobros: "$100,000",
            pendiente: "$380,000"
        },
        {
            viaje: 'v003',  
            cliente: 'Villamex',
            fecha: '02/15/2023',
            cantidad: 10,
            precio: "$45,000",
            monto: "$450,000",
            obs: 'sin observaciones',
            costos: "$250,000",
            facturas: "$500,000",
            cobros: "$300,000",
            pendiente: "$200,000"
        },
        {
            viaje: 'v004',  
            cliente: 'Villamex',
            fecha: '02/24/2023',
            cantidad: 15,
            precio: "$32,000",
            monto: "$480,000",
            obs: 'a consignación',
            costos: "$300,000",
            facturas: "$450,000",
            cobros: "$100,000",
            pendiente: "$380,000"
        },
        {
            viaje: 'v003',  
            cliente: 'Villamex',
            fecha: '02/15/2023',
            cantidad: 10,
            precio: "$45,000",
            monto: "$450,000",
            obs: 'sin observaciones',
            costos: "$250,000",
            facturas: "$500,000",
            cobros: "$300,000",
            pendiente: "$200,000"
        },
        {
            viaje: 'v004',  
            cliente: 'Villamex',
            fecha: '02/24/2023',
            cantidad: 15,
            precio: "$32,000",
            monto: "$480,000",
            obs: 'a consignación',
            costos: "$300,000",
            facturas: "$450,000",
            cobros: "$100,000",
            pendiente: "$380,000"
        },
         
      ]

const TableExampleInvertedColors = () => (
    <div>
        <Table color={'blue'}  inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell># Viaje</Table.HeaderCell>
              <Table.HeaderCell>Cliente</Table.HeaderCell>
              <Table.HeaderCell>Fecha</Table.HeaderCell>
              <Table.HeaderCell>Cantidad</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
              <Table.HeaderCell>Monto</Table.HeaderCell>
              <Table.HeaderCell>Observaciones</Table.HeaderCell>
              <Table.HeaderCell>Costo Total</Table.HeaderCell>
              <Table.HeaderCell>Facturado Total</Table.HeaderCell>
              <Table.HeaderCell>Cobrado Total</Table.HeaderCell>
              <Table.HeaderCell>Pendiente de Cobro</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {
                registros.map((item, ndx) => (
                    <Table.Row key={ndx}>
                        <Table.Cell>{item.viaje}</Table.Cell>
                        <Table.Cell>{item.cliente}</Table.Cell>
                        <Table.Cell>{item.fecha}</Table.Cell>
                        <Table.Cell>{item.cantidad}</Table.Cell>
                        <Table.Cell>{item.precio}</Table.Cell>
                        <Table.Cell>{item.monto}</Table.Cell>
                        <Table.Cell>{item.obs}</Table.Cell>
                        <Table.Cell>{item.costos}</Table.Cell>
                        <Table.Cell>{item.facturas}</Table.Cell>
                        <Table.Cell>{item.cobros}</Table.Cell>
                        <Table.Cell>{item.pendiente}</Table.Cell>
                        <Table.HeaderCell><Icon name='pencil alternate' size='large' /></Table.HeaderCell>
                        <Table.HeaderCell><Icon name='trash' size='large' /></Table.HeaderCell>
                        
                    </Table.Row>
                ))
            }
            
            
          </Table.Body>
        </Table>


        <Table color={'olive'}  inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell># Viaje</Table.HeaderCell>
              <Table.HeaderCell>Cliente</Table.HeaderCell>
              <Table.HeaderCell>Fecha</Table.HeaderCell>
              <Table.HeaderCell>Cantidad</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
              <Table.HeaderCell>Monto</Table.HeaderCell>
              <Table.HeaderCell>Observaciones</Table.HeaderCell>
              <Table.HeaderCell>Costo Total</Table.HeaderCell>
              <Table.HeaderCell>Facturado Total</Table.HeaderCell>
              <Table.HeaderCell>Cobrado Total</Table.HeaderCell>
              <Table.HeaderCell>Pendiente de Cobro</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {
                registros.map((item, ndx) => (
                    <Table.Row key={ndx}>
                        <Table.Cell>{item.viaje}</Table.Cell>
                        <Table.Cell>Sicar Farms</Table.Cell>
                        <Table.Cell>{item.fecha}</Table.Cell>
                        <Table.Cell>{item.cantidad}</Table.Cell>
                        <Table.Cell>{item.precio}</Table.Cell>
                        <Table.Cell>{item.monto}</Table.Cell>
                        <Table.Cell>{item.obs}</Table.Cell>
                        <Table.Cell>{item.costos}</Table.Cell>
                        <Table.Cell>{item.facturas}</Table.Cell>
                        <Table.Cell>{item.cobros}</Table.Cell>
                        <Table.Cell>{item.pendiente}</Table.Cell>
                        <Table.HeaderCell><Icon name='pencil alternate' size='large' /></Table.HeaderCell>
                        <Table.HeaderCell><Icon name='trash' size='large' /></Table.HeaderCell>
                    </Table.Row>
                ))
            }
            
            
          </Table.Body>
        </Table>


        <Table color={'yellow'}  inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell># Viaje</Table.HeaderCell>
              <Table.HeaderCell>Cliente</Table.HeaderCell>
              <Table.HeaderCell>Fecha</Table.HeaderCell>
              <Table.HeaderCell>Cantidad</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
              <Table.HeaderCell>Monto</Table.HeaderCell>
              <Table.HeaderCell>Observaciones</Table.HeaderCell>
              <Table.HeaderCell>Costo Total</Table.HeaderCell>
              <Table.HeaderCell>Facturado Total</Table.HeaderCell>
              <Table.HeaderCell>Cobrado Total</Table.HeaderCell>
              <Table.HeaderCell>Pendiente de Cobro</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {
                registros.map((item, ndx) => (
                    <Table.Row key={ndx}>
                        <Table.Cell>{item.viaje}</Table.Cell>
                        <Table.Cell>McDaniels</Table.Cell>
                        <Table.Cell>{item.fecha}</Table.Cell>
                        <Table.Cell>{item.cantidad}</Table.Cell>
                        <Table.Cell>{item.precio}</Table.Cell>
                        <Table.Cell>{item.monto}</Table.Cell>
                        <Table.Cell>{item.obs}</Table.Cell>
                        <Table.Cell>{item.costos}</Table.Cell>
                        <Table.Cell>{item.facturas}</Table.Cell>
                        <Table.Cell>{item.cobros}</Table.Cell>
                        <Table.Cell>{item.pendiente}</Table.Cell>
                        <Table.HeaderCell><Icon name='pencil alternate' size='large' /></Table.HeaderCell>
                        <Table.HeaderCell><Icon name='trash' size='large' /></Table.HeaderCell>
                    </Table.Row>
                ))
            }
            
            
          </Table.Body>
        </Table>

    </div>
  )
     

    return (
            <Container>
                    
                <TableExampleInvertedColors />             


            </Container>
    
    )
}

export default Tablasemantic