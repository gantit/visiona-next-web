import {
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'
import { useTranslation, Trans } from 'react-i18next'

const styles = {
  title: {
    fontSize: '24px',
    margin: '0 auto',
    padding: '1em 0',
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  },
  text: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'white',
    textAlign: 'center'
  },
  btn: {
    margin: '0 auto',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#23405e',
    color: 'white',
    fontSize: '14px',
    fontWeight: '400',
    display: 'block',
    width: '350px',
    marginTop: '3em'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    paddingBottom: '3em'
  },
  strong: {
    fontWeight: '600',
    color: '#EEEFF4'
  }
}

const LopdSection = () => {
  const [t] = useTranslation()
  return (
    <Segment vertical className="LopdSection" style={{ padding: '0 0 2em 0', backgroundColor: '#383838' }}>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row columns="equal">
          <Grid.Column style={styles.container}>
            <Header as="h3" style={styles.title}>{t('Cumplimos la normativa de Protección de Datos')}</Header>
            <Header as="p" style={styles.text}>{t('Según la Ley, está prohibido instalar sistemas de videovigilancia que graben imágenes de lugares públicos o de otra propiedad privada. Puedes estar tranquilo: lo tendremos en cuenta en nuestro estudio preliminar y en el diseño de tu sistema de videovigilancia. ')}</Header>
            <Header as="p" style={styles.text}>
              <Trans i18nKey="adviseForFree">
                Además,
                <strong style={styles.strong}> te asesoramos gratuitamente </strong>
                sobre los pasos que debes dar para que tu sistema cumpla todos los requisitos exigidos por la Ley.
              </Trans>
            </Header>
            {/* <Button style={styles.btn}>QUIERO ASESORAMIENTO</Button> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  )
}

export default LopdSection
