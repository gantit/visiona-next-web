import {
  Grid,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'


const OurServices = () => {
  const { t } = useTranslation()
  return (
    <Segment style={{ padding: '4em 0em' }} className="OurServices" vertical>
      <Grid container stackable verticalAlign="middle" textAlign="center">
        <Grid.Row columns="equal">
          <Header as="h2" style={{ fontSize: '3em', padding: '1em 0em' }}> Nuestros servicios  </Header>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header icon>
              <Icon name="shield" />
              {t('Seguridad Integral')}
            </Header>
            <p>{t('Elige entre contratar nuestro completo sistema de videovigilancia o integrar todos los componentes necesarios para formar un sistema de seguridad: alarmas, control de accesos, etc.')}</p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="video camera" />
              {t('Sistema antirrobos')}
            </Header>
            <p>{t('Instalamos sistemas discretos que no llaman la atención, que cuentan con dispositivo antisabotaje y almacenamiento de grabaciones.')}</p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="fire extinguisher" />
              {t('Alarma de detección de incendios')}
            </Header>
            <p>{t('Instalamos sistemas de detección de incendios, que dan aviso inmediato si se detecta cualquier indicio de fuego o humo.')}</p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="address book" />
              {t('Central de recepción de alarmas')}
            </Header>
            <p>{t('Siempre disponibles las 24 horas / 365 días al año. Te mantenemos informado de lo que ocurre en todo momento.')}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header icon>
              <Icon name="expand" />
              {t('Sistema de seguridad perimetral')}
            </Header>
            <p>{t('La solución perfecta si necesitas impedir o controlar el acceso a un recinto cerrado, sin importar sus dimensiones.')}</p>
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name="eye" />
              {t('Videovigilancia CCTV')}
            </Header>
            <p>{t('Sistema con Circuito Cerrado de Televisión, con grabación Full HD y zoom digital para que puedas ver lo que sucede con todo detalle.')}</p>
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name="sliders horizontal" />
              {t('Sistemas personalizados')}
            </Header>
            <p>{t('Estudiamos las peculiaridades de cada caso para diseñar un sistema que cubra todas tus necesidades en materia de videovigilancia.')}</p>
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name="random" />
              {t('Sistema de control de accesos')}
            </Header>
            <p>{t('Podrás saber quién entra y sale de las instalaciones, bien a través de un código, con huella dactilar o con tarjeta de proximidad.')}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default OurServices
