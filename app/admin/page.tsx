import { checkIsAdmin } from '@/lib'
import { redirect } from 'next/navigation'

const AdminPage = async () => {
  const isAdmin = await checkIsAdmin()

  if (!isAdmin) {
    redirect('/')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Админ-панель</h1>
      <p>Только для администратора.</p>
    </div>
  )
}

export default AdminPage
