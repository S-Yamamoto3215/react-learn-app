import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simple ToDo App',
  description: 'Learn React / Next.js Todo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  )
}
