import React from 'react'
import { Roboto, Bungee } from 'next/font/google'
import '../globals.css'
import { Header } from '@/components/Header'

export const metadata = {
  title: 'Empower code',
  description: 'Empower code',
}

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const bungeeFont = Bungee({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungee',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${robotoFont.variable} ${bungeeFont.variable}`}
    >
      <body>
        <Header />

        {children}
      </body>
    </html>
  )
}
