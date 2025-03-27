export async function fetchPosts() {
  const res = await fetch('http://localhost:3001/posts', {
    next: { revalidate: 60 },
    cache: 'force-cache'
  })

  if (!res.ok) {
    throw new Error('Ошибка загрузки постов')
  }

  return res.json()
}
