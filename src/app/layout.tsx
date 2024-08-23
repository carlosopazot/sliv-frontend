import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sliv',
  description: 'Marketplace de cartas coleccionables'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <AntdRegistry>
          <Navbar />
          {children}
        </AntdRegistry>
      </body>
    </html>
  )
}
