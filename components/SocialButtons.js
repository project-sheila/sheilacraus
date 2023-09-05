import { Stack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SocialButtons() {
  return (
    <Stack wrap="wrap" direction='row' gap={3} justifyContent='center'>
      <Link href="https://www.linkedin.com/in/sheilacraus/" target='_blank'>
          <Image alt="Linked in icon" src={require("../assets/images/linkedin.png")} width={32} height={32} />
      </Link>
      <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=sheilamaecraus7@gmail.com" target='_blank'>
          <Image alt="Mail icon" src={require("../assets/images/mail.png")} width={32} height={32} />
      </Link>
      <Link href="https://github.com/sheicraus" target='_blank'>
          <Image alt="GitHub icon" src={require("../assets/images/github.png")} width={32} height={32} />
      </Link>
    </Stack>
  )
}
