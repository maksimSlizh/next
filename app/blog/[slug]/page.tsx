import { notFound } from 'next/navigation'
import styles from './post.module.scss'
import { Comments } from '@/components'
import { IPost } from '@/types'

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3001/posts')
  const posts = await res.json()

  return posts.map((post: IPost) => ({
    slug: post.slug
  }))
}

async function getPost(slug: string) {
  const res = await fetch(`http://localhost:3001/posts?slug=${slug}`, {
    next: { revalidate: 3600 }
  })

  const posts = await res.json()

  if (!posts || posts.length === 0) {
    return null
  }

  return posts[0]
}

export default async function BlogPostPage({params}: {params: { slug: string }}) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <img src={post.image} alt={post.title} className={styles.image} />
      <div className={styles.meta}>
        <span>{post.category}</span> • <span>{post.date}</span> •{' '}
        <span>{post.readingTime}</span>
      </div>
      <div className={styles.content}>
        <p>{post.content}</p>
      </div>
      <Comments postId={post.id} />
    </main>
  )
}
