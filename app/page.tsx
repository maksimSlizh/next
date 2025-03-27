import styles from './page.module.scss'
import { fetchPosts } from '@/app/lib'
import { BlogCard } from '@/app/components'

const HomePage = async () => {
  const posts = await fetchPosts()

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>.my_blog</h1>
      <div className={styles.grid}>
        {posts.map((post: any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}

export default HomePage
