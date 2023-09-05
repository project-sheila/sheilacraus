// app/providers.tsx
'use client'

import { ActiveTabProvider } from '@/context/ActiveTab'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }){
  return (
    <ActiveTabProvider>
      <CacheProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </ActiveTabProvider>
  )
}