"use client"

import { Box, Card, CardBody, HStack, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Sheila Craus | Contact';
  }, []);
  return (
    <main>
      <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
      <div className="flex justify-between align-middle">
        <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
        • CONTACT
        </Heading>
      </div>
      <div>
        <HStack spacing={3}>
          <Box width="40%" className='font-semibold'>Email</Box>
          <Box width="60%">
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=sheilamaecraus7@gmail.com" target='_blank'>
            sheilamaecraus7@gmail.com
          </Link>
          </Box>
        </HStack>
        <HStack spacing={3}>
          <Box width="40%" className='font-semibold'>Linked In</Box>
          <Box width="60%">
            <Link href="https://www.linkedin.com/in/sheilacraus/" target='_blank'>
              Sheila Mae Craus
            </Link>
          </Box>
        </HStack>
      </div>
      </Card>
    </main>
  )
}
