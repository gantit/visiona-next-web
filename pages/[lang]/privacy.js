import Head from "next/head"
import { useTranslation } from 'react-i18next'

import Privacity from 'components/privacity'
import Footer from 'components/footer'

const PrivacityPage = () => {
  const { t } = useTranslation()

  const Title = () => (
    <Head>
      <meta charSet="utf-8" />
      <title>{t('Visiona.cat | política de privacidad')}</title>
      <link rel="canonical" href="https://visiona.cat/es/privacity" />
      <meta name="description" content={t('política de privacidad de visiona.cat')} />
      <meta property="og:site_name" content={t('Visiona Intelligence Security')} />
      <meta property="og:title" content={t('Visiona Intelligence Security')} />
      <meta property="og:description" content={t('política de privacidad de visiona.cat')} />
      <meta property="og:url" content="https://visiona.cat/privacity" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    </Head>
  )

  return (
    <>
      <Title />
      <Privacity />
      <Footer />
    </>
  )
}

export default PrivacityPage
