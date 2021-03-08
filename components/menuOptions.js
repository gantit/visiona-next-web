import Link from "next/link"
import { Menu } from 'semantic-ui-react'
import { useRouter } from "next/router"
import { useTranslation } from 'react-i18next'

const MenuOptions = ({ setSidebarOpened }) => {
  const [t, i18n] = useTranslation()
  const router = useRouter()
  return (
    <>
      <Menu.Item
        as='p'
        active={router.pathname === '/[lang]'}
      >
        <Link href={`/${i18n.language}/`}>
          <a onClick={() => setSidebarOpened(false)}>
            {t('Video Vigilancia')}
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item
        as='p'
        active={router.pathname === '/[lang]/fog-system'}
      >
        <Link href={`/${i18n.language}/fog-system`}>
          <a onClick={() => setSidebarOpened(false)}>
            {t('Sistema de Niebla')}
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item
        as='p'
        active={router.pathname === '/[lang]/downloads'}
      >
        <Link href={`/${i18n.language}/downloads`} >
          <a onClick={() => setSidebarOpened(false)}>
            {t('Descargas')}
          </a>
        </Link>
      </Menu.Item>
    </>
  )
}

export default MenuOptions
