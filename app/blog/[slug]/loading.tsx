import styles from './loading.module.scss'

const Loading = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <span className={styles.loader}></span>
    </div>
  )
}

export default Loading
