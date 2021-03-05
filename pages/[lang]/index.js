import Head from "next/head"

import BodySection from 'components/body'
import LopdSection from 'components/lopd'
// import HowWork from 'components/containers/HowWork'
// import ContactForm from 'components/containers/ContactForm'
// import OurServices from 'components/containers/OurServices'
// import Especialist from 'components/containers/Especialist'
// import Productivity from 'components/containers/Productivity'
// import Footer from 'components/containers/Footer'
// import Details from 'components/containers/Details'



const Title = () => (
  <Head>
    <meta name="description"
      content="Instalación de Cámaras y Sistemas de Videovigilancia en Barcelona y provincia Sistema de seguridad a medida, vigilancia 24 horas Recibe una propuesta a medida y sin compromiso Más de 15" />
    <meta property="og:site_name" content="Visiona Intelligence Security" />
    <meta property="og:title" content="Visiona Intelligence Security" />
    <meta property="og:description"
      content="Instalación de Cámaras y Sistemas de Videovigilancia en Barcelona y provincia Sistema de seguridad a medida, vigilancia 24 horas Recibe una propuesta a medida y sin compromiso Más de 15" />
    <meta property="og:image" itemProp="image" content="https://visiona.cat/img/visionalogo.png" />
    <meta property="og:type" content="website" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="300" />
    <meta property="og:url" content="https://visiona.cat" />
  </Head>
)

const HomePage = () => (
  <>
    <Title />
    <BodySection />
    <LopdSection />
    {/* 
      <HowWork />
      <OurServices />
      <Especialist />
      <Productivity />
      <Details />
      <ContactForm />
      <Footer /> 
    */}
  </>
)

export default HomePage
