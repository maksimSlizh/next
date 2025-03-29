export async function getComments(postId: number) {
  const res = await fetch(`http://localhost:3001/comments?postId=${postId}`, {
    next: { revalidate: 60 }, // 1 раз в минуту
    cache: 'force-cache',     // SSG с ISR
  })

  if (!res.ok) throw new Error('Ошибка загрузки комментариев')
  return res.json()
}
