import { useContext } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from "next/router";
import { Header as HeaderSR, Button, Icon, Segment } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'
import { ToastContext } from "context"

const styles = {
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
    marginTop: '8em',
    marginBottom: '4em'
  }
}

const Header = ({ mobile }) => {
  const { funnel } = useContext(ToastContext)
  const router = useRouter()
  const [t] = useTranslation()
  return (
    <Segment
      textAlign="center"
      style={{ minHeight: '360px', padding: '1em 0em' }}
      vertical
    >
      <HeaderSR
        as="h1"
        content={t(funnel?.title || 'instalación de Cámaras y Sistemas de Videovigilancia')}
        inverted
        style={{
          fontSize: mobile ? '2.5em' : '4em',
          fontWeight: '600',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '1.2em'
        }}
      />
      <HeaderSR
        as="h4"
        content={t(funnel?.subtitle || 'Sistema de seguridad a medida, vigilancia 24 horas')}
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '20px',
          fontWeight: '600',
          width: mobile ? '300px' : null,
          margin: 'auto',
          marginTop: mobile ? '0.5em' : '0.8em'
        }}
      />
      {router.pathname === '/[lang]' && (
        <Button as="a" href="#ContactForm" style={styles.btn}>
          {t('CONTACTANOS')}
        </Button>
      )}
      <Icon
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '20px 0',
          color: 'white',
          marginTop: router.pathname !== '/[lang]' ? '7em' : '0'
        }}
        name="angle down"
        size="big"
      />
    </Segment>
  )
}

Header.propTypes = {
  mobile: PropTypes.bool
}

Header.defaultProps = {
  mobile: null
}

export default Header
