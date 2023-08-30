"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { Button, Card, CardBody, Container, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Sheila Mae Craus',
//   description: 'My portfolio website.',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Container>

            <nav className='sticky top-0 z-1'>
              <Card className='shadow-lg rounded-lg mt-10'>
                <CardBody className='p-3'>
                  <Link href="/">
                    <Button><i class="text-xl text-gray-500 fi fi-rr-home"></i></Button>
                  </Link>
                  <Link href="/experiences">
                    <Button><i class="text-xl text-gray-500 fi fi-rr-briefcase"></i></Button>
                  </Link>
                  <Link href="/projects">
                    <Button><i class="text-xl text-gray-500 fi fi-rr-folder-open"></i></Button>
                  </Link>
                  <Link href="/contact">
                    <Button><i class="text-xl text-gray-500 fi fi-rr-comment-alt-dots"></i></Button>
                  </Link>
                  
                </CardBody>
              </Card>
            </nav>

            <Card className='shadow-lg rounded-lg mt-5 mb-10 p-5'>
              {children}
            </Card>
            
          </Container>
        </Providers>
      </body>
    </html>
  )
}
