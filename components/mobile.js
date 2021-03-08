import { useState, useContext } from 'react'
import Link from "next/link"
import {
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

import MenuOptions from './menuOptions'
import Header from './header'
import { ToastContext } from "context"
import Logo from 'assets/icons/logo'

const MobileContainer = ({ children }) => {
  const { funnel } = useContext(ToastContext)
  const [_, i18n] = useTranslation()
  const [sidebarOpened, setSidebarOpened] = useState(false)

  return (
    <Sidebar.Pushable
      className="MobileContainer"
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={() => setSidebarOpened(false)}
        vertical
        visible={sidebarOpened}
      >
        <MenuOptions setSidebarOpened={setSidebarOpened} />
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: funnel?.height || '400px', padding: '1em 0em 2em', backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${funnel?.url || "/img/photos/visionaCat_bg1.jpg"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'left top'
          }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item style={{
                maxWidth: '200px',
              }}>
                <Link href={`/${i18n.language}`}>
                  <a><Logo /></a>
                </Link>
              </Menu.Item>
              <Menu.Item onClick={() => setSidebarOpened(true)} position="right">
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>
          </Container>
          <Header mobile />
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default MobileContainer
