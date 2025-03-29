export async function getPost(slug: string) {
  const res = await fetch(`http://localhost:3001/posts?slug=${slug}`, {
    next: { revalidate: 3600 }
  })

  const posts = await res.json()

  if (!posts || posts.length === 0) {
    return null
  }

  return posts[0]
}
