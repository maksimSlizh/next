'use client'

import { useEffect, useState } from 'react'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'
import styles from './Comments.module.scss'

type Comment = {
  id: number
  postId: number
  author: string
  text: string
  createdAt: string
}

export default function Comments({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    fetch(`http://localhost:3001/comments?postId=${postId}`)
      .then((res) => res.json())
      .then(setComments)
  }, [postId])

  const addComment = async (values: { author: string; text: string }) => {
    const newComment = {
      ...values,
      postId,
      createdAt: new Date().toISOString()
    }

    const res = await fetch('http://localhost:3001/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment)
    })

    if (res.ok) {
      const saved = await res.json()
      setComments((prev) => [...prev, saved])
    }
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Комментарии</h3>
      <CommentsList comments={comments} />
      <CommentForm onSubmit={addComment} />
    </div>
  )
}
