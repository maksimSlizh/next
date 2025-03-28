import Link from 'next/link'
import styles from './Header.module.scss'

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

async function getUser() {
  const res = await fetch('http://localhost:3001/user', {
    cache: 'no-store'
  })

  if (!res.ok) return null

  return res.json()
}

const Header = async () => {
  const user = await getUser()
  const isAdmin = user?.role === 'admin'

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
