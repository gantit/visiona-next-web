import React from 'react'
import Head from "next/head"
import { useTranslation } from 'react-i18next'

import Legal from 'components/legalInfo'
import Footer from 'components/footer'

const LegalPage = () => {
  const { t } = useTranslation()

  const Title = () => (
    <Head>
      <meta charSet="utf-8" />
      <title>{t('Visiona.cat | aviso legal')}</title>
      <link rel="canonical" href="https://visiona.cat/legal" />
      <meta name="description" content={t('aviso legal de visiona.cat')} />
      <meta property="og:site_name" content={t('Visiona Intelligence Security')} />
      <meta property="og:title" content={t('Visiona Intelligence Security')} />
      <meta property="og:description" content={t('aviso legal de visiona.cat')} />
      <meta property="og:url" content="https://visiona.cat/legal" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    </Head>
  )

  return (
    <>
      <Title />
      <Legal />
      <Footer />
    </>
  )
}

export default LegalPage
