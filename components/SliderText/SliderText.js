import React from 'react'
import {
  Grid,
  Segment,
  Icon,
  Header
} from 'semantic-ui-react'
import Slider from '@farbenmeer/react-spring-slider'
import { useTranslation } from 'react-i18next'
import '../../../utils/i18n'

import b1 from '../../../assets/img/photos/banner1.png'
import b2 from '../../../assets/img/photos/banner2.png'
import b3 from '../../../assets/img/photos/banner3.png'

const SliderText = () => {
  const { t } = useTranslation()
  const styles = {
    title: {
      fontSize: '20px',
      textAlign: 'center',
      margin: '0 auto',
      padding: '1em 0',
      color: 'white',
      fontFamily: 'Open Sans, Roboto, Fira Sans, Droid Sans, Helvetica Neue',
      fontWeight: '500'
    },
    text: {
      fontSize: '14px',
      color: 'white',
      fontFamily: 'Open Sans, Roboto, Fira Sans, Droid Sans, Helvetica Neue',
      fontWeight: '300'
    },
    bullet: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      backgroundColor: 'white',
      margin: '30px 14px'
    },
    arrows: {
      height: '55px',
      color: 'white',
      margin: '0 2%',
      background: 'none',
      border: 'none'
    }
  }

  const BulletComponent = ({ onClick, isActive }) => (
    <li
      style={{ ...styles.bullet, opacity: !isActive && '0.5' }}
      role="presentation"
      onClick={onClick}
    />
  )

  const ArrowComponent = ({ onClick, direction }) => (
    <button
      style={styles.arrows}
      onClick={onClick}
    >
      <Icon name={direction === 'right' ? 'angle right' : 'angle left'} size="huge" />
    </button>
  )

  return (
    <Grid>
      <Grid.Row textAlign="center">
        <Grid.Column style={{ height: '326px', padding: '0', backgroundColor: '#23405e' }}>
          <Slider
            hasBullets
            hasArrows
            BulletComponent={(a) => BulletComponent(a)}
            ArrowComponent={(a) => ArrowComponent(a)}
          >
            <div style={{
              color: 'white', backgroundImage: `url(${b1})`, backgroundSize: 'cover', height: '100%'
            }}
            >
              <Segment
                vertical
                className="LopdSection"
                style={{
                  height: '100%',
                  width: '70%',
                  margin: '0 auto'
                }}
              >
                <Grid
                  container
                  stackable
                  verticalAlign="middle"
                  style={{
                    height: '100%'
                  }}
                >
                  <Grid.Row columns="equal">
                    <Grid.Column>
                      <Header as="h3" style={styles.title}>{t('¿Qué podemos hacer por tu empresa?')}</Header>
                      <Header as="p" style={styles.text}>
                        {t('Mantén el control de tu oficina, estés donde estés gracias a  nuestro sistemade videovigilancia puedes saber lo que ocurre en las instalaciones de tu negocio,sin importar dónde te encuentres. Es especialmente útil si hay zonas de acceso restringido,ya que gracias a la funcionalidad de activación por movimiento podrás saber si alguien ha entrado en ella.También es útil para mejorar la producción en oficinas cuando no estás presente.')}
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </div>
            <div style={{
              color: 'white', backgroundImage: `url(${b2})`, backgroundSize: 'cover', height: '100%'
            }}
            >
              <Segment
                vertical
                className="LopdSection"
                style={{
                  height: '100%',
                  width: '80%',
                  margin: '0 auto'
                }}
              >
                <Grid
                  container
                  stackable
                  verticalAlign="middle"
                  style={{
                    height: '100%'
                  }}
                >
                  <Grid.Row columns="equal">
                    <Grid.Column>
                      <Header as="h3" style={styles.title}>{t('Atención personalizada')}</Header>
                      <Header as="p" style={styles.text}>
                        {t('Independientemente del tamaño de tu negocio, realizaremos una visita preliminar gratuita para realizar un estudio detallado de las necesidades de tu caso concreto.')}
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </div>
            <div style={{
              color: 'white', backgroundImage: `url(${b3})`, backgroundSize: 'auto', backgroundPosition: 'center', height: '100%'
            }}
            >
              <Segment
                vertical
                className="LopdSection"
                style={{
                  height: '100%',
                  width: '80%',
                  margin: '0 auto'
                }}
              >
                <Grid
                  container
                  stackable
                  verticalAlign="middle"
                  style={{
                    height: '100%'
                  }}
                >
                  <Grid.Row columns="equal">
                    <Grid.Column>
                      <Header as="h3" style={styles.title}>{t('Especialistas en instalación de cámaras en oficinas')}</Header>
                      <Header as="p" style={styles.text}>{t('En Visiona nos encargamos de diseñar sistemas de seguridad y videovigilancia a medida para oficinas y empresas de todo tipo.')}</Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </div>
          </Slider>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default SliderText
