import {
  Container,
  Divider,
  Header,
  Segment
} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

const Details = () => {
  const [t] = useTranslation()
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>  Innovación </Header>
        <p style={{ fontSize: '1.33em' }}>
          {t('Sistemas de vigilancia y grabación de última generación. Apostando por las solucionas de seguridad más innovadoras y eficaces del mercado.')}
        </p>
        {/* <Button as='a' size='large'> Leer Más </Button> */}
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          {t('¿Por qué elegir Visiona Intelligence Security?')}
        </Divider>
        <Header as="h3" style={{ fontSize: '2em' }}>  Proximidad </Header>
        <p style={{ fontSize: '1.33em' }}>
          {t('Estudio previo e instalación totalmente personalizada adaptada a las necesidades específicas de nuestros clientes en Barcelona. Atención y soporte telefónico.')}
        </p>
        {/* <Button as='a' size='large'> Leer Más </Button> */}
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          {t('¿Por qué elegir Visiona Intelligence Security?')}
        </Divider>
        <Header as="h3" style={{ fontSize: '2em' }}>{t('Excelencia')}</Header>
        <p style={{ fontSize: '1.33em' }}>
          {t('Controles de calidad. Revisión y mantenimiento.  Copias de seguridad de tus grabaciones y almacenamiento de las mismas.')}
        </p>
        {/* <Button as='a' size='large'> Leer Más </Button> */}
      </Container>
    </Segment>
  )
}

export default Details
