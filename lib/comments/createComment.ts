import { API_URL, COMMENTS_ENDPOINT } from '@/const'

export async function createComment(data: {
  postId: number
  author: string
  text: string
}) {
  const newComment = {
    ...data,
    createdAt: new Date().toISOString(),
  }

  const res = await fetch(`${API_URL + COMMENTS_ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newComment),
  })

  if (!res.ok) {
    throw new Error('Ошибка при отправке комментария')
  }

  return res.json()
}
