import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SakuraBg } from '@/components/SakuraBG'
import Link from 'next/link'
import { FaLinkedinIn } from 'react-icons/fa'

import { RiGithubLine } from 'react-icons/ri'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Danel Arrate',
  description: 'Danel Arrate Portfolio',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/Mount_Hua_Sect_Symbol.webp',
  },
  openGraph: {
    title: 'Danel Arrate',
    description: 'Danel Arrate Portfolio',
    images: [
      {
        url: '/Mount_Hua_Sect_Symbol.webp',
        width: 512,
        height: 512,
        alt: 'Mount Hua Sect Symbol',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Danel Arrate',
    description: 'Danel Arrate Portfolio',
    images: ['/Mount_Hua_Sect_Symbol.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          style={{
            padding: '2rem',
            width: '100%',
          }}
        >
          <ul
            className="flex"
            style={{
              justifyContent: 'flex-end',
            }}
          >
            <li>
              <Link href="/">About me</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              {' '}
              <Link href={'https://github.com/Danelarrate'} target="_blank">
                <RiGithubLine color="#bbb" size={'1.25rem'} />
              </Link>{' '}
            </li>
            <li>
              <Link
                href={'https://www.linkedin.com/in/danelarrate/'}
                target="_blank"
              >
                <FaLinkedinIn color="#bbb" size={'1.25rem'} />
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <SakuraBg />
      </body>
    </html>
  )
}
