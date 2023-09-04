"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { Button, Card, CardBody, Container, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { Providers } from "./providers";
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Container>

            <nav className='sticky top-0 z-1'>
              <Card className='shadow-lg rounded-lg mt-10'>
                <CardBody className='p-3'>
                  <Tooltip label='Home'>
                  <Link href="/">
                    <Button isActive={activeTab === "home"} onClick={()=>setActiveTab("home")}><i class="text-xl text-gray-500 fi fi-rr-home"></i></Button>
                  </Link>
                  </Tooltip>
                  <Tooltip label='Experiences'>
                  <Link href="/experiences">
                    <Button isActive={activeTab === "experiences"} onClick={()=>setActiveTab("experiences")}><i class="text-xl text-gray-500 fi fi-rr-briefcase"></i></Button>
                  </Link>
                  </Tooltip>
                  <Tooltip label='Projects'>
                  <Link href="/projects">
                    <Button isActive={activeTab === "projects"} onClick={()=>setActiveTab("projects")}><i class="text-xl text-gray-500 fi fi-rr-folder-open"></i></Button>
                  </Link>
                  </Tooltip>
                  <Tooltip label='Contact'>
                  <Link href="/contact">
                    <Button isActive={activeTab === "contact"} onClick={()=>setActiveTab("contact")}><i class="text-xl text-gray-500 fi fi-rr-comment-alt-dots"></i></Button>
                  </Link>
                  </Tooltip>
                  
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
