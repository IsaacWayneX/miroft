import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Miroft',
  description: 'Miroft Agency',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
