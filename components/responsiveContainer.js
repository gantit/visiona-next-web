import { useState } from 'react'
import { createMedia } from '@artsy/fresnel'
import Link from "next/link"
import {
  Message,
  Button,
  Sidebar,
  Icon,
  TransitionablePortal
} from 'semantic-ui-react'
import { useCookies } from 'react-cookie'
import { useTranslation } from 'react-i18next'

import Desktop from './desktop'
import Mobile from './mobile'

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    margin: 0,
    padding: "30px",
  },
  textCookie: {
    margin: "20px 0",
    lineHeight: "1.8em"
  },
  btn: { padding: '4px', marginLeft: '10px' }
}

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const ResponsiveContainer = ({ children, pathname = "" }) => {
  const [cookies, setCookie] = useCookies(['_legalVisiona', '_cookiesVisiona'])
  const [showConsent, setConsent] = useState(cookies._cookiesVisiona === 'true')
  const [t] = useTranslation()

  if (!cookies._legalVisiona) {
    setCookie('_legalVisiona', false, {
      sameSite: 'strict'
    })
  }

  if (!cookies._cookiesVisiona) {
    setCookie('_cookiesVisiona', false)
  }

  const acceptConsent = () => {
    setConsent(true)
    setCookie('_cookiesVisiona', 'true', {
      sameSite: 'strict'
    })
  }

  const CookiesComponen = () => (
    <>
      <p style={styles.textCookie}>
        {t('Utilizamos cookies, propias y de terceros, para optimizar su visita y mejorar nuestros servicios mediante la personalización denuestros contenidos y publicidad en base al análisis de su navegación. Si pulsa el botón “aceptar cookies” autoriza la instalación de cookies de análisis, publicitarias y de seguimiento para todos estos fines. Puede rechazar las cookies en configuración o puede obtener más información sobre qué cookies usamos en nuestra')}
        {pathname !== '/cookies'
          ? (
            <Link href="/cookies">
              <Button as='a' basic color="blue" style={styles.btn}>{t('Política de cookies')}</Button>
            </Link>
          )
          : ` ${t('Política de cookies')}`}
      </p>
      <Button color="green" content={t('Aceptar y continuar')} icon="right arrow" labelPosition="right" onClick={acceptConsent} />
      <Button basic color="red" content={t('Cerrar')} labelPosition="right" icon="cancel" onClick={() => setConsent(true)} />
    </>
  )
  return (
    <nav>
      <MediaContextProvider>
        <Media greaterThan='mobile'>
          <Desktop>{children}</Desktop>
        </Media>
        <Media at='mobile'>
          <Mobile>{children}</Mobile>
        </Media>
        <TransitionablePortal open={!showConsent}>
          <Message
            success
            visible={showConsent}
            style={styles.container}
          >
            <Message.Header> <Icon name='exclamation' /> Política de Cookies</Message.Header>
            <CookiesComponen />
          </Message>
        </TransitionablePortal>
      </MediaContextProvider>
    </nav>
  )
}

export default ResponsiveContainer
