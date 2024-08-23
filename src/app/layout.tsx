import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ThemeProvider } from '@/context/ThemeContext'
import { Layout } from 'antd'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sliv | Marketplace de cartas coleccionables',
  description: 'Marketplace de cartas coleccionables',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicon.png',
        href: '/images/favicon.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/favicon.png',
        href: '/images/favicon.png'
      }
    ]
  }
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
          <ThemeProvider>
            <Layout>
              <Navbar />
              {children}
            </Layout>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
