import styles from './page.module.scss'
import { fetchPosts } from '@/lib'
import { BlogCard } from '@/components'
import { PageTitle } from '@/ui'
import { IPost } from '@/types'

const HomePage = async () => {
  const posts = await fetchPosts()

  return (
    <main className={styles.main}>
      <PageTitle>.my_blog</PageTitle>
      <div className={styles.grid}>
        {posts.map((post: IPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}

export default HomePage
