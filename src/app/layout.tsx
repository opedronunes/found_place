import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'animate.css';
import Head from 'next/head';

<Head>
  <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
</Head>

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Found Place',
  description: 'A melhor loja de tecnologia da região',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
