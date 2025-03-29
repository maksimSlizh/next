import CommentsList from './CommentsList'
import CommentForm from './CommentForm'
import styles from './Comments.module.scss'

export default function Comments({ postId }: { postId: number }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Комментарии</h3>
      <CommentsList postId={postId} />
      <CommentForm postId={postId} />
    </div>
  )
}
