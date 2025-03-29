'use client'

import useSWR from 'swr'
import styles from './Comments.module.scss'

const fetcher = (url: string) => fetch(url).then(res => res.json())

type Comment = {
  id: number
  postId: number
  author: string
  text: string
  createdAt: string
}

export default function CommentsList({ postId }: { postId: number }) {
  const { data: comments, isLoading } = useSWR<Comment[]>(
    `http://localhost:3001/comments?postId=${postId}`,
    fetcher
  )

  if (isLoading) return <p>Загрузка комментариев...</p>
  if (!comments || comments.length === 0) return <p>Комментариев пока нет</p>

  return (
    <ul className={styles.list}>
      {comments.map((c) => (
        <li key={c.id} className={styles.comment}>
          <strong>{c.author}</strong>: {c.text}
        </li>
      ))}
    </ul>
  )
}
