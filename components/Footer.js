import { Center, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import SocialButtons from './SocialButtons'

export default function Footer() {
  return (
    <Center className="py-10">
        <Stack>
          <Heading className="font-semibold text-slate-700">Let's work together.</Heading>
          <SocialButtons/>
        </Stack>
    </Center>
  )
}
