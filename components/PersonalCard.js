import { Button, Grid, GridItem, Heading, Image as ChakraImg, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function PersonalCard() {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={4} className="py-3">
        <GridItem colSpan={3} w='100%' className="p-2">
          <Heading className="mt-2 font-semibold text-slate-700">{`I'm Sheila Craus`}</Heading>
          <p className="mt-4 leading-relaxed text-sm text-gray-500">Frontend software developer specializing in web and mobile application development.</p>
          <Stack spacing={2} direction={"row"} align={"center"} className="mt-6"> 
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=sheilamaecraus7@gmail.com" target='_blank'>
            <Button className="tracking-wide font-normal text-slate-600" size="sm" colorScheme="gray" variant="outline" leftIcon={<i class="fi fi-rr-phone-call"></i>}>
              Message me
            </Button>
          </Link>
          <Link href="https://sheilacraus.my.canva.site/" target="_blank">
            <Button className="tracking-wide font-normal text-slate-600" size="sm" colorScheme="gray" variant="outline" leftIcon={<i class="fi fi-rr-document-signed"></i>}>
              See resume
            </Button>
          </Link>
          </Stack>

        </GridItem>
        <GridItem colSpan={2} w='100%' className="p-3">
          <ChakraImg src="/icon.jpg" borderRadius='full' className="p-3 ring-2 ring-slate-200"/>
        </GridItem>
      </Grid>
  )
}
