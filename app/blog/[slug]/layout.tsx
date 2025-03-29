import type { ReactNode } from 'react'
import styles from './layout.module.scss'

const BlogPostLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.containerWrapper}>{children}</div>
}

export default BlogPostLayout
