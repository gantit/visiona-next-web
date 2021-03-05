import React from 'react'
import {
  Grid,
  Header,
  Segment,
  Image
} from 'semantic-ui-react'
import { Trans } from 'react-i18next'


const Especialist = () => (
  <Segment style={{ padding: '8em 0em' }} vertical className="Especialist">
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Trans i18nKey="EspecialistPage">
            <Header as="h3" style={{ fontSize: '2em' }}>
              Especialistas en la Instalación de Cámaras en oficinas
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              En Visiona nos encargamos de diseñar sistemas de seguridad y videovigilancia a medida,
              para oficinas y empresas de todo tipo. Independientemente del tamaño de tu negocio,
              realizaremos una visita preliminar gratuita, para realizar un estudio detallado de las necesidades de tu caso concreto.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              ¿Qué podemos hacer por tu empresa?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Mantén el control de tu oficina, estés donde estés.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              Gracias a nuestro sistema de videovigilancia puedes saber lo que ocurre en las instalaciones de tu negocio,
              sin importar dónde te encuentres. Es especialmente útil si hay zonas de acceso restringido,
              ya que gracias a la funcionalidad de activación por movimiento podrás saber si alguien ha entrado en ella.
              También es útil para mejorar la producción en oficinas cuando no estás presente.
            </p>
          </Trans>
        </Grid.Column>
        <Grid.Column width={8}>
          <Image bordered rounded size="massive" src='/img/photos/officerUser.png' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          {/* <Button size='huge'>Contactanos</Button> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Especialist
