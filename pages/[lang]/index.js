import Head from "next/head"

import BodySection from 'components/body'
import LopdSection from 'components/lopd'
import HowWork from 'components/howWork'
import OurServices from 'components/ourServices'
import Especialist from 'components/especialist'
import ContactForm from 'components/contactForm'
import Productivity from 'components/productivity'
import Details from 'components/details'
import Footer from 'components/footer'



const Title = () => {
  const description = t(
    "Instalación de sistemas de Videovigilancia en Barcelona y provincia Sistema de seguridad a medida, vigilancia 24 horas. Recibe una propuesta a medida y sin compromiso Más de 15"
  );
  const title = t(
    "Visiona Intelligence Security"
  );
  const url = "https://visiona.cat/es/";
  const keys =
    "seguridad integral, protección contra robos, okupas, detener a los ladrones, no saqueos, stop okupas, camaras de video";

  const logo = 'https://visiona.cat/img/visionalogo.png'
  return (
    <Head>
      <meta name="description"
        content={description} />
      <link rel="canonical" href={url} />
      <meta name="keywords" content={keys} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" itemProp="image" content={logo} />
      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:url" content={url} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={niebla} />
    </Head>
  )
}

const HomePage = () => (
  <>
    <Title />
    <BodySection />
    <HowWork />
    <OurServices />
    <Especialist />
    <Productivity />
    <Details />
    <LopdSection />
    <ContactForm />
    <Footer />
  </>
)

export default HomePage
