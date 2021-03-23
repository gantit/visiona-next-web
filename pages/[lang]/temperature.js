import { useContext, useEffect } from "react";
import Head from "next/head"
import { useTranslation } from 'react-i18next'

import Footer from 'components/footer'
import { ToastContext } from "context";
import HowWorkWidget from "components/howWorkWidget";
import TitleText from "components/titleText";
import TemperatureDetail from "components/temperatureDetail";
import VideoDemo from "components/videoDemo";
import ContactForm from 'components/contactForm'

const DownloadPage = () => {
  const { setMessage } = useContext(ToastContext)
  const [t] = useTranslation();

  useEffect(() => {
    setMessage({
      url: '/img/photos/temperature.webp',
      title: t("SOLUCIONES DE MEDICIÓN DE TEMPERATURAS"),
      subtitle: t("Vela por la salud de tu negocio y anticípate a la nueva situación"),
      height: 600,
      postion: 'left 90%'
    })
    return () => {
      setMessage('')
    }
  }, [])

  const Title = () => {
    const description = t("La tecnología de infrarrojos es fundamental, ya que permite realizar controles de temperatura sin contacto, rápidos y eficaces.");
    const title = t("Visiona.cat | Medición de Temperatura con infrarrojos ");
    const url = "https://visiona.cat/es/temperature/";
    const keys = "camaras de infrarrojos, controles de temperatura, Dahua, baja iluminación";
    const imgHeader = "https://visiona.cat/img/photos/temperature.webp"
    return (
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keys} />
        <meta property="og:description" content={description} />
        <meta property="og:image:height" content="950" />
        <meta property="og:image:width" content="2575" />
        <meta property="og:image" content={imgHeader} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content={t("Visiona Intelligence Security")} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={imgHeader} />
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
      </Head>
    );
  };

  return (
    <>
      <Title />
      <TitleText>
        <h2>Tecnología avanzada al servicio de tu seguridad</h2>
        <p>La detección precisa y rápida de la temperatura de la piel es fundamental para la salud pública y la seguridad, especialmente durante crisis o pandemias como la COVID-19.
        La tecnología de infrarrojos es esencial en este sentido, ya que permite un control rápido y eficaz de la temperatura sin contacto. Los escáneres térmicos de infrarrojos y otros sistemas de imagen térmica son necesarios para garantizar la seguridad en el lugar de trabajo y en los lugares públicos, identificando a las personas con altas temperaturas en la piel.</p>
        <p>La Solución de Medición de Temperatura nuestra se basa en algoritmos de inteligencia artificial que reconocen las figuras humanas y excluyen otras fuentes de calor, y está acompañada de un sistema Blackbody que proporciona una referencia de temperatura constante que aumenta la precisión de la medición. Controla el acceso de personas y anticípate a cualquier riesgo en una fase muy temprana.</p>
      </TitleText>
      <HowWorkWidget />
      <TemperatureDetail />
      <VideoDemo />
      <ContactForm />
      <Footer />
    </>
  )
}

export default DownloadPage
