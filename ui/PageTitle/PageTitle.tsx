import { ReactNode } from 'react'
import styles from './PageTitle.module.scss'

type Props = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

const PageTitle = ({ children, as = 'h1', className = '' }: Props) => {
  const Tag = as
  return <Tag className={`${styles.title} ${className}`}>{children}</Tag>
}

export default PageTitle
