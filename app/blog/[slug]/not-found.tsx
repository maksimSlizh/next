import Link from 'next/link'
import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Статья не найдена</h1>
      <p className={styles.text}>
        Возможно, она была удалена или вы указали неверный адрес.
      </p>
      <Link href="/" className={styles.link}>
        ← Вернуться на главную
      </Link>
    </div>
  )
}
