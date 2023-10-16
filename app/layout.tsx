import './globals.css'
import type { Metadata } from 'next'
import { Inter, Sawarabi_Mincho, Noto_Sans_JP } from 'next/font/google'
import { LanguageProvider } from './LanguageContext'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })
const sawarabiMincho = Sawarabi_Mincho({ weight: '400', subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fernando Campos | @ferchodev',
  description: 'Fernando Campos | @ferchodev software developer portfolio',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  openGraph: {
    title: 'Fernando Campos | @ferchodev',
    description: 'Fernando Campos | @ferchodev software developer portfolio',
    images: [
      {
        url: 'https://i.imgur.com/2HP2VDr.png',
        width: 800,
        height: 600,
        alt: 'Fernando Campos | @ferchodev software developer portfolio website',
      },
      {
        url: 'https://i.imgur.com/2HP2VDr.png',
        width: 1800,
        height: 1600,
        alt: 'Fernando Campos | @ferchodev software developer portfolio website',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sawarabiMincho.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
