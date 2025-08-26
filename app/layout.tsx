import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fútbol Data Live',
  description: 'Datos, estadísticas y marcadores en vivo al estilo Promiedos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-promiedos-bg text-white`}>
        {children}
      </body>
    </html>
  )
}
