import React from 'react'
import {
  List, Grid, Segment, Header, Icon, Image
} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

import './HowWork.module.scss'

const styles = {
  box: {
    padding: '0 4em 4em 4em', margin: '0 auto'
  },
  title: {
    fontSize: '3em',
    textAlign: 'center'
  },
  text: {
    fontSize: '1.5em'
  },
  container: {
    paddingTop: '4em'
  }
}

const HowWork = () => {
  const { t } = useTranslation()
  return (
    <Segment vertical className="HowWork" style={styles.container}>
      <Grid columns={2} container stackable verticalAlign="middle" textAlign="center">
        <Grid.Row columns="equal">
          <Grid.Column width={16}>
            <Header as="h3" style={styles.title}>{t('¿Cómo trabajamos?')}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="howWork">
          <Grid.Column width={8} style={styles.box}>
            <Grid columns={2} divided verticalAlign="middle">
              <Grid.Row className="howWork">
                <Grid.Column width={4}>
                  <Icon name="mail" size="huge" />
                </Grid.Column>
                <Grid.Column width={12}>
                  <List.Item>
                    <List.Content>
                      <List.Header style={styles.text}>{t('Contacta con nosotros')}</List.Header>
                      <List.Description as="p">
                        {t('Puedes llamarnos por teléfono.')}
                        <a className="item" href="tel:+34663333662">663333662</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="howWork">
                <Grid.Column width={4}>
                  <Icon name="handshake" size="huge" />
                </Grid.Column>
                <Grid.Column width={12}>
                  <List.Item>
                    <List.Content>
                      <List.Header style={styles.text}>{t('Estudio Gratuito')}</List.Header>
                      <List.Description as="p">{t('Nos desplazamos al lugar donde necesitas la instalación y hacemos un estudio sin coste para ti.')}</List.Description>
                    </List.Content>
                  </List.Item>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="howWork">
                <Grid.Column width={4}>
                  <Icon name="calculator" size="huge" />
                </Grid.Column>
                <Grid.Column width={12}>
                  <List.Item>
                    <List.Content>
                      <List.Header style={styles.text}>{t('Presupuesto personalizado del sistema')}</List.Header>
                      <List.Description as="p">{t('Con los datos recabados, escogemos la tecnología que mejor se adapta a tu caso.')}</List.Description>
                    </List.Content>
                  </List.Item>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="howWork">
                <Grid.Column width={4}>
                  <Icon name="building" size="huge" />
                </Grid.Column>
                <Grid.Column width={12}>
                  <List.Item>
                    <List.Content>
                      <List.Header style={styles.text}>{t('Instalación a medida')}</List.Header>
                      <List.Description as="p">{t('Nuestro equipo especialista se encarga de colocar las cámaras y poner el sistema en funcionamiento.')}</List.Description>
                    </List.Content>
                  </List.Item>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={8} style={styles.box}>
            <Image size="massive" src="./img/photos/comoTrabajamos.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default HowWork
