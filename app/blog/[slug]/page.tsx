import { notFound } from 'next/navigation'
import Image from 'next/image'
import styles from './post.module.scss'
import { Comments } from '@/components'
import { IPost } from '@/types'
import { getPost } from '@/lib'

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3001/posts')
  const posts = await res.json()

  return posts.map((post: IPost) => ({
    slug: post.slug
  }))
}

type PageProps = {
  params: {
    slug: string
  }
}


export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await Promise.resolve(params)

  const post = await getPost(slug)

  if (!post) notFound()

  return (
    <main className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        priority
        className={styles.image}
      />
      <div className={styles.meta}>
        <span>{post.category}</span> • <span>{post.date}</span> • <span>{post.readingTime}</span>
      </div>
      <div className={styles.content}>
        <p>{post.content}</p>
      </div>
      <Comments postId={post.id} />
    </main>
  )
}
