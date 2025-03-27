import './styles/globals.scss'
import { Header } from '@/app/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Easy blogging with Next.js'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
