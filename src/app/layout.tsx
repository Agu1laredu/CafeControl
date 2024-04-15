import './globals.css'

export const metadata = {
  title: 'Cafe Control',
  description: 'Sistema de control',
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
