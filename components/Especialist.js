import {
  Grid,
  Header,
  Segment,
  Image,
  Divider
} from 'semantic-ui-react'
import { Trans, useTranslation } from 'react-i18next'


const Especialist = () => {
  const [t] = useTranslation()
  return (
    <Segment style={{ padding: '8em 0em' }} vertical className="Especialist">
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Trans i18nKey="EspecialistPage">
              <Header as="h3" style={{ fontSize: '2em' }}>
                Especialistas en la Instalación de sistema completo de alarmas
            </Header>
              <p style={{ fontSize: '1.33em' }}>
                En Visiona nos encargamos de diseñar sistemas de seguridad y videovigilancia a medida,
                para empresas de todo tipo, desde locales pequeños a grandes superficies comerciales. Realizaremos una visita preliminar gratuita, para realizar un estudio detallado de las necesidades de tu caso concreto.
            </p>
            </Trans>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image rounded size="massive" alt={t("camará en poste")} src='/img/photos/camOnTuve.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width={8}>
            <Image rounded size="massive" alt={t("estes donde este")} src='/img/photos/whereverYouAre.jpg' />
          </Grid.Column>
          <Grid.Column width={8}>
            <Trans i18nKey="WorkForYou">
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
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Especialist
