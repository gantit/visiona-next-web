import {
  Grid,
  Header,
  Segment,
  List,
  Container,
  Image
} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'
import Link from "next/link"

import Logo from 'assets/icons/logo'
import Whatsapp from 'assets/icons/whatsapp'

const Footer = () => {
  const [t, i18n] = useTranslation()
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as="h4" content={t('Nuestros Datos')} />
              <List link inverted>
                <List.Item as="a" href="https://www.google.es/maps/search/Pla%C3%A7a+Can+Gassol,+3,+08301,+Matar%C3%B3/@41.5448099,2.4497639,17z/data=!3m1!4b1" target="_blank">
                  <strong style={{ color: '#999' }}>
                    {t('¿Dónde estamos?')}
                  </strong>
                  : Plaça Can Gassol, 3, 08301, Mataró
                </List.Item>
                <List.Item as="a" href="tel:+34663333662" style={{ textDecoration: 'underline' }}>
                  <strong style={{ color: '#999' }}>
                    {t('Teléfono')}
                  </strong>
                  : 663333662
                </List.Item>
                <List.Item as="a" href="https://api.whatsapp.com/send?phone=+34663333662&text=Hola buscamos información" style={{ textDecoration: 'underline' }}>
                  <strong style={{ color: '#999' }}>
                    {t('Whatsapp')}
                  </strong>
                  : <Whatsapp fill="#fff" width="20px" style={{ marginLeft: '10px' }} />
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content={t('Legal')} />
              <List link inverted>
                <Link href={`/${i18n.language}/legal`}>
                  <a>
                    <List.Item as="span" >{t('Aviso legal')}</List.Item>
                  </a>
                </Link>
              </List>
              <List link inverted>
                <Link href={`/${i18n.language}/cookies`}>
                  <a>
                    <List.Item as="span">{t('Política de Cookies')}</List.Item>
                  </a>
                </Link>
              </List>
              <List link inverted>
                <Link href={`/${i18n.language}/privacy`}>
                  <a>
                    <List.Item as="span" >{t('Política de privacidad')}</List.Item>
                  </a>
                </Link>
              </List>
              <List link inverted>
                <Link href={`/${i18n.language}/downloads`} >
                  <a>
                    <List.Item as="span" >{t('Descargas')}</List.Item>
                  </a>
                </Link>
              </List>

            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" inverted> Visiona.cat  </Header>
              <p>{t(`Copyright ${new Date().getFullYear()} | Todos los derechos reservados.`)}</p>
            </Grid.Column>
            <Grid.Column width={3} floated="right">
              <Link href={`/${i18n.language}`}>
                <a style={{
                  maxWidth: '200px',
                  display: 'block'
                }}>
                  <Logo />
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment >
  )
}

export default Footer
