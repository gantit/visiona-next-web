import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'components/containers/node_modules/react-i18next'

import Download from '../Containers/Download'
import Footer from '../Containers/Footer'

const DownloadPage = () => {
  const { t } = useTranslation()

  const Title = () => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{t('Visiona.cat | Descargas')}</title>
      <link rel="canonical" href="https://visiona.cat/download" />
      <meta name="description" content={t('Descargas de visiona.cat')} />
      <meta property="og:site_name" content={t('Visiona Intelligence Security')} />
      <meta property="og:title" content={t('Visiona Intelligence Security')} />
      <meta property="og:description" content={t('Descargas de visiona.cat')} />
      <meta property="og:url" content="https://visiona.cat/download" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    </Helmet>
  )

  return (
    <>
      <Title />
      <Download />
      <Footer />
    </>
  )
}

export default DownloadPage
