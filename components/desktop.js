import { useState, useContext } from "react"
import PropTypes from 'prop-types'
import Link from "next/link"
import {
  Container,
  Menu,
  Segment,
  Visibility,
  Image
} from 'semantic-ui-react'

import MenuOptions from './menuOptions'
import Header from './header'
import { ToastContext } from "context"

import Logo from 'assets/icons/logo'


const DesktopContainer = ({ children }) => {
  const { funnel } = useContext(ToastContext)
  const [hideFixedMenu, setHideFixedMenu] = useState(false)

  return (
    <>
      <Visibility
        once={false}
        onBottomPassed={() => setHideFixedMenu(true)}
        onBottomPassedReverse={() => setHideFixedMenu(false)}
      >
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: funnel?.height || 500, padding: '1em 0em 2em', backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${funnel?.url || "./img/photos/funnel.png"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'left top'
          }}
          vertical
        >
          <Image src={funnel?.url || "./img/photos/funnel.png"} fluid />
          <Menu
            fixed={hideFixedMenu ? 'top' : null}
            inverted={!hideFixedMenu}
            pointing={!hideFixedMenu}
            secondary={!hideFixedMenu}
            size="large"
            style={{ borderColor: 'transparent' }}
          >
            <Container>
              <Link href="/">
                <a> <Logo isWhite={!hideFixedMenu} /> </a>
              </Link>
              <Menu.Item position="right">
                <MenuOptions />
              </Menu.Item>
            </Container>
          </Menu>
          <Header />
        </Segment>
      </Visibility>
      {children}
    </>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default DesktopContainer
