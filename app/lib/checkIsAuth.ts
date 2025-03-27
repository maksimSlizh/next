export async function checkIsAdmin() {
  const res = await fetch('http://localhost:3001/user', {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Не удалось загрузить пользователя')
  }

  const user = await res.json()

  return user.role === 'admin'
}
