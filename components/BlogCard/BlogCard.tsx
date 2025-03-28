import Link from 'next/link'
import Image from 'next/image'
import { Svg } from '@/public'
import styles from './BlogCard.module.scss'
import { IPost } from '@/types'

const BlogCard = ({ post }: { post: IPost }) => {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.meta}>
          <div>
            <span>{post.category}</span>
            <span> • {post.date}</span>
          </div>
          <div>
            <span className={styles.likes}>
              {post.likes} <Svg name="like" size={14} color="#888" />
            </span>
          </div>
        </div>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.preview}>{post.preview}</p>
        <div className={styles.footer}>
          <span>{post.readingTime}</span>
          <span className={styles.readMore}>Читать →</span>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
