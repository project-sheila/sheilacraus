"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import { Button, Card, CardBody, Container, Text } from '@chakra-ui/react';

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
                <CardBody>
                  <Button><i class="text-xl fi fi-rr-home"></i></Button>
                  <Button><i class="text-xl fi fi-rr-briefcase"></i></Button>
                  <Button><i class="text-xl fi fi-rr-folder-open"></i></Button>
                  <Button><i class="text-xl fi fi-rr-comment-alt-dots"></i></Button>
                </CardBody>
              </Card>
            </nav>

            <Card className='shadow-lg rounded-lg mt-5 mb-10 p-5 -z-10'>
              {children}
            </Card>
          </Container>
        </Providers>
      </body>
    </html>
  )
}
