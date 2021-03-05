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
    <HowWork />
    <OurServices />
    <Especialist />
    <Productivity />
    <Details />
    <ContactForm />
    <Footer />
    {/* 
    */}
  </>
)

export default HomePage
