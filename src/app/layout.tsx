'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'
import styles from '@/layouts/App/App.module.css'
import { Navbar } from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  console.log(router);
  // const canonicalRoute = route === '/' ? '' : `${asPath}`;
  const canonicalRoute = '';

  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${canonicalRoute}`}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className={styles.app}>
          {children}
        </main>
      </body>
    </html>
  )
}
