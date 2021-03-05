import React from 'react'
import {
  Container,
  Header,
  Segment,
  Icon
} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

const Download = () => {
  const { t } = useTranslation()
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em', textAlign: 'center' }}>
          {t('Selecciona el software que necesitas y descárgalo gratis')}
        </Header>

        <Header as="h2">
          <Icon.Group size="large">
            <Icon name="apple" />
          </Icon.Group>
          <a href="http://www.visiona.cat/download/EZStation_Mac-B1113.3.2.1-IN.zip">Mac (EZStation Mac)</a>
        </Header>
        <Header as="h2">
          <Icon.Group size="large">
            <Icon name="windows" />
          </Icon.Group>
          <a href="http://www.visiona.cat/download/EZStation_Win32-B1130.3.2.1-IN.zip">Windows 32-bits (EZStation Win32)</a>
        </Header>
        <Header as="h2">
          <Icon.Group size="large">
            <Icon name="windows" />
          </Icon.Group>
          <a href="http://www.visiona.cat/download/EZStation_Win64-B1130.3.6.0-IN.zip">Windows 64-bit EZStation Win64</a>
        </Header>
      </Container>
    </Segment>
  )
}

export default Download
