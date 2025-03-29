'use client'

import { useEffect } from 'react'
import styles from './error.module.scss'

type Props = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error('Ошибка при загрузке поста:', error)
  }, [error])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Упс! Что-то пошло не так 😢</h1>
      <p className={styles.message}>{error.message}</p>
      <button className={styles.button} onClick={reset}>
        Попробовать снова
      </button>
    </div>
  )
}
