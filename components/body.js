import {
  Grid,
  Header,
  Item,
  Segment
} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'


const styles = {
  container: {
    backgroundSize: 'cover',
    border: '1px solid white',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px'
  },
  title: {
    fontSize: '2em',
    color: 'white',
    textAlign: 'center',
    margin: '0 auto'
  }
}

const BodySection = () => {
  const { t } = useTranslation()
  return (
    <Segment style={{ padding: '8em 0em' }} vertical className="BodySection">
      <Grid container stackable verticalAlign="middle">
        <Grid.Row columns="equal">
          <Header as="h3" style={{ fontSize: '3em', textAlign: 'center', margin: '0 auto' }}>{t('Soluciones que se adaptan a cualquier situación')}</Header>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column style={{ ...styles.container, backgroundImage: `url(/img/photos/office.jpg)` }} onClick={() => console.log('Click1')}>
            <Item.Group>
              <Item>
                <Header as="p" style={styles.title}>{t('Seguridad para tu oficina')}</Header>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column style={{ ...styles.container, backgroundImage: `url(/img/photos/empresa.jpg)` }} onClick={() => console.log('Click2')}>
            <Item.Group>
              <Item>
                <Header as="p" href="#" style={styles.title}>{t('Vigila tu empresa o negocio')}</Header>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column style={{ ...styles.container, backgroundImage: `url(/img/photos/industry.jpg)` }} onClick={() => console.log('Click3')}>
            <Item.Group>
              <Item>
                <Header as="p" style={styles.title}>{t('Controla y Graba en Naves Industriales')}</Header>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default BodySection
