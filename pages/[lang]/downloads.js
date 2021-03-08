import Head from "next/head"
import { useTranslation } from 'react-i18next'

import Download from 'components/download'
import Footer from 'components/footer'

const DownloadPage = () => {
  const [t] = useTranslation()

  const Title = () => (
    <Head>
      <meta charSet="utf-8" />
      <title>{t('Visiona.cat | Descargas')}</title>
      <link rel="canonical" href="https://visiona.cat/es/download" />
      <meta name="description" content={t('Descargas de visiona.cat')} />
      <meta property="og:site_name" content={t('Visiona Intelligence Security')} />
      <meta property="og:title" content={t('Visiona Intelligence Security')} />
      <meta property="og:description" content={t('Descargas de visiona.cat')} />
      <meta property="og:url" content="https://visiona.cat/es/download" />
    </Head>
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
