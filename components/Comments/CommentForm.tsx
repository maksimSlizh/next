'use client'

import { Formik, Form, Field } from 'formik'
import { createComment } from '@/lib'
import { mutate } from 'swr'
import styles from './Comments.module.scss'

export default function CommentForm({ postId }: { postId: number }) {
  return (
    <Formik
      initialValues={{ author: '', text: '' }}
      onSubmit={async (values, { resetForm }) => {
        await createComment({ ...values, postId })
        resetForm()
        // Обновить SWR кэш вручную:
        mutate(`http://localhost:3001/comments?postId=${postId}`)
      }}
    >
      <Form className={styles.form}>
        <Field name="author" placeholder="Имя" className={styles.input} />
        <Field
          name="text"
          as="textarea"
          placeholder="Комментарий"
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          Отправить
        </button>
      </Form>
    </Formik>
  )
}
