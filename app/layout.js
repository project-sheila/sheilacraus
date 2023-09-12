"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { Button, Card, CardBody, Container, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { Providers } from "./providers";
import Footer from '@/components/Footer';
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  let pathname = usePathname();

  return (
    <html lang="en">
      <body style={{backgroundColor: '#EBEFF3'}} className={inter.className}>
        <Providers>
          <Container>

            <nav className='sticky top-0 z-1'>
              <Card className='shadow-lg rounded-lg mt-10 pt-1 pb-1'>
                <CardBody className='p-3'>
                  <Tooltip label='Home' className='text-xs rounded-md'>
                    <Link href="/" className={`${(pathname === "/home" || pathname === "/") && `bg-slate-200 `} px-4 py-3 rounded-md m-1`}>
                      <i className={`align-middle text-xl ${pathname === "/home" || pathname === "/" ? `text-slate-600` : `text-slate-300`} fi fi-rr-home`}></i>
                    </Link>
                  </Tooltip>
                  <Tooltip label='Experiences' className='text-xs rounded-md'>
                    <Link href="/experiences" className={`${(pathname === "/experiences") && `bg-slate-200 `} px-4 py-3 rounded-md m-1`}>
                      <i className={`align-middle text-xl ${pathname === "/experiences" ? `text-slate-600` : `text-slate-300`} fi fi-rr-briefcase`}></i>
                    </Link>
                  </Tooltip>
                  <Tooltip label='Projects' className='text-xs rounded-md'>
                    <Link href="/projects" className={`${(pathname === "/projects") && `bg-slate-200 `} px-4 py-3 rounded-md m-1`}>
                      <i className={`align-middle text-xl ${pathname === "/projects" ? `text-slate-600` : `text-slate-300`} fi fi-rr-folder-open`}></i>
                    </Link>
                  </Tooltip>
                  <Tooltip label='Contact' className='text-xs rounded-md'>
                    <Link href="/contact" className={`${(pathname === "/contact") && `bg-slate-200 `} px-4 py-3 rounded-md m-1`}>
                      <i className={`align-middle text-xl ${pathname === "/contact" ? `text-slate-600` : `text-slate-300`} fi fi-rr-comment-alt-dots`}></i>
                    </Link>
                  </Tooltip>
                  {/* <Tooltip label='Experiences' className='text-xs rounded-md'>
                  <Link href="/experiences">
                    <Button isActive={pathname === "experiences"} onClick={()=>setActiveNavItem("experiences")}><i class="text-xl text-gray-500 fi fi-rr-briefcase"></i></Button>
                  </Link>
                  </Tooltip>
                  <Tooltip label='Projects' className='text-xs rounded-md'>
                  <Link href="/projects">
                    <Button isActive={pathname === "projects"} onClick={()=>setActiveNavItem("projects")}><i class="text-xl text-gray-500 fi fi-rr-folder-open"></i></Button>
                  </Link>
                  </Tooltip>
                  <Tooltip label='Contact' className='text-xs rounded-md'>
                  <Link href="/contact">
                    <Button isActive={pathname === "contact"} onClick={()=>setActiveNavItem("contact")}><i class="text-xl text-gray-500 fi fi-rr-comment-alt-dots"></i></Button>
                  </Link>
                  </Tooltip> */}
                  
                </CardBody>
              </Card>
            </nav>

            <Card className='shadow-lg rounded-lg mt-5 mb-10 p-5'>
              {children}
              <Footer/> 
            </Card>

            
          </Container>
        </Providers>
      </body>
    </html>
  )
}
