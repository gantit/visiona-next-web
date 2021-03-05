import Head from 'next/head'
import {
  Button,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'
import Link from "next/link"
import { useTranslation } from 'react-i18next'


const ErrorPage = () => {
  const { t } = useTranslation()
  const styles = {
    title: {
      fontSize: '70px',
      textAlign: 'center',
      margin: '0 auto',
      color: '#23405e',
      fontFamily: 'Open Sans, Roboto, Fira Sans, Droid Sans, Helvetica Neue',
      fontWeight: '600'
    },
    text: {
      fontSize: '26px',
      fontFamily: 'Open Sans, Roboto, Fira Sans, Droid Sans, Helvetica Neue',
      fontWeight: '600',
      paddingTop: '30px'
    },
    btn: {
      height: '40px',
      borderRadius: '20px',
      backgroundColor: '#23405e',
      color: 'white',
      fontSize: '16px'
    },
    cam: {
      width: '100%',
      margin: '40px auto'
    }
  }

  const Title = () => (
    <Head>
      <meta charSet="utf-8" />
      <title>{t('Visiona.cat | Sistemas de seguridad')}</title>
      <link rel="canonical" href="https://visiona.cat/download" />
      <meta name="description" content={t('Visiona.cat')} />
      <meta property="og:site_name" content={t('Visiona Intelligence Security')} />
      <meta property="og:title" content={t('Visiona Intelligence Security')} />
      <meta property="og:description" content={t('Visiona.cat')} />
      <meta property="og:url" content="https://visiona.cat/download" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    </Head>
  )

  return (
    <>
      404
    </>
  )
}

export default ErrorPage
