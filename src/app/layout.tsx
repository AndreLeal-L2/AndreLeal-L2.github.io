import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arara Web - Presença Digital Profissional',
  description: 'Sites rápidos, seguros e em conformidade com o RGPD para PMEs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      <body className="bg-deep-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
