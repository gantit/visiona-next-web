import Link from "next/link"
import { Menu } from 'semantic-ui-react'
import { useRouter } from "next/router"
import { useTranslation } from 'react-i18next'

const MenuOptions = () => {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  return (
    <>
      <Menu.Item
        active={router.pathname === '/[lang]'}>
        <Link href={`/${i18n.language}/`}>
          <a>{t('Video Vigilancia')}</a>
        </Link>
      </Menu.Item>
      <Menu.Item
        active={router.pathname === '/[lang]/fog-system'}>
        <Link href={`/${i18n.language}/fog-system`}>
          <a>{t('Fog System')}</a>
        </Link>
      </Menu.Item>
      <Menu.Item
        active={router.pathname === '/[lang]/downloads'}>
        <Link href={`/${i18n.language}/downloads`} >
          {t('Descargas')}
        </Link>
      </Menu.Item>
    </>
  )
}

export default MenuOptions
