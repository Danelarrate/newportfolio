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
