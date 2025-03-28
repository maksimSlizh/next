import { Formik, Form, Field } from 'formik'
import styles from './Comments.module.scss'

type Props = {
  onSubmit: (values: { author: string; text: string }) => void
}

export default function CommentForm({ onSubmit }: Props) {
  return (
    <Formik initialValues={{ author: '', text: '' }} onSubmit={onSubmit}>
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
