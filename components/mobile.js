import { useState } from 'react'
import Link from "next/link"
import {
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react'

import MenuOptions from './menuOptions'
import Header from './header'
import Logo from 'assets/icons/logo'

const MobileContainer = ({ children }) => {
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
        <MenuOptions />
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 350,
            padding: '1em 0em 2em',
            backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 90%)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top'
          }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item>
                <Link href="/">
                  <Logo />
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
