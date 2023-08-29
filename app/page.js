"use client"

import { Button, Container, Divider, Grid, GridItem, HStack, Heading, Image, Spacer, VStack, Wrap, WrapItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container className="p-0">

      <Grid templateColumns='repeat(5, 1fr)' gap={4} className="py-3">
        <GridItem colSpan={3} w='100%' className="p-2">
          <Heading className="mt-2 font-semibold text-slate-800">I'm Sheila Craus</Heading>
          <p className="mt-4 leading-relaxed text-sm text-slate-500">Frontend software developer specializing in web and mobile application development.</p>
          
          <Spacer className="mt-3" gap={5}> 
            <Button size="sm" colorScheme="gray" variant="solid" leftIcon={<i class="fi fi-rr-phone-call"></i>}>Message me</Button>
            <Button size="sm" colorScheme="gray" variant="outline" leftIcon={<i class="fi fi-rr-document-signed"></i>}>See resume</Button>
          </Spacer>

        </GridItem>
        <GridItem colSpan={2} w='100%' className="p-3">
          <Image src="/icon.jpg" borderRadius='full' className="p-3 ring-2 ring-slate-200"/>
        </GridItem>
      </Grid>


      <Divider/>




     
      {/* <Button><i class="text-xl fi fi-rr-home"></i></Button>  */}

    </Container>
  ) 
}
