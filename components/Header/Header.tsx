import Link from 'next/link'
import styles from './Header.module.scss'
import { checkIsAdmin } from '@/lib'

const baseMenu = [
  {
    id: 1,
    title: 'Главная',
    url: '/'
  },
  {
    id: 2,
    title: 'Админ',
    url: '/admin'
  }
]

const Header = async () => {
  const isAdmin = await checkIsAdmin()

  const filteredMenu = isAdmin
    ? baseMenu
    : baseMenu.filter((item) => item.url !== '/admin')

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {filteredMenu.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
