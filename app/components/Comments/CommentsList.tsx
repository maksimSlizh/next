import styles from './Comments.module.scss'

type Comment = {
  id: number
  postId: number
  author: string
  text: string
  createdAt: string
}

export default function CommentsList({ comments }: { comments: Comment[] }) {
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
