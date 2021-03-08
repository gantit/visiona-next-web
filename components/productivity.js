import {
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

const Productivity = () => {
  const [t] = useTranslation()
  return (
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{
            paddingBottom: '5em', paddingTop: '5em', backgroundImage: `url(/img/photos/productividad.jpg)`, backgroundSize: 'cover'
          }}
          >
            <Header inverted as="h3" style={{ fontSize: '2em' }}>
              {t('Productividad')}
            </Header>
            <p style={{ fontSize: '1.33em', color: 'white' }}>{t('Controla la productividad de tus trabajadores aunque estés fuera de la oficina')}</p>
          </Grid.Column>
          <Grid.Column style={{
            paddingBottom: '5em', paddingTop: '5em', backgroundImage: `url(/img/photos/seguridad.jpg)`, backgroundSize: 'cover'
          }}
          >
            <Header inverted as="h3" style={{ fontSize: '2em' }}>
              {t('Seguridad')}
            </Header>
            <p style={{ fontSize: '1.33em', color: 'white' }}>{t('Controla el acceso a tu oficina aun cuando no estás en los alrededores')}</p>
          </Grid.Column>
          <Grid.Column style={{
            paddingBottom: '5em', paddingTop: '5em', backgroundImage: `url(/img/photos/tranquilidad.jpg)`, backgroundSize: 'cover'
          }}
          >
            <Header inverted as="h3" style={{ fontSize: '2em' }}>
              {t('Tranquilidad')}
            </Header>
            <p style={{ fontSize: '1.33em', color: 'white' }}>
              {t('Siente la tranquilidad de saber que tendrás el control de todo lo que ocurra en tu oficina')}
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Productivity
