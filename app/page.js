"use client"

import { experiences, skills, techStack } from "@/utils/constants";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardHeader, Center, Container, Divider, Grid, GridItem, HStack, Heading, Image, Spacer, Stack, Step, StepDescription, StepIcon, StepIndicator, StepStatus, StepTitle, Stepper, Tag, TagLeftIcon, VStack, Wrap, WrapItem, useSteps } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const { activeExp } = useSteps({
    index: 1,
    count: experiences.length,
  })

  return (
    <Container className="p-0">
      <Head>
        <title>Sheila Craus</title>
        <meta property="og:title" content="Sheila Craus" key="title" />
      </Head>

      <Grid templateColumns='repeat(5, 1fr)' gap={4} className="py-3">
        <GridItem colSpan={3} w='100%' className="p-2">
          <Heading className="mt-2 font-semibold text-slate-700">I'm Sheila Craus</Heading>
          <p className="mt-4 leading-relaxed text-sm text-gray-500">Frontend software developer specializing in web and mobile application development.</p>
          <Stack spacing={2} direction={"row"} align={"center"} className="mt-6"> 
            <Button className="tracking-wide font-light text-slate-600" size="sm" colorScheme="gray" variant="outline" leftIcon={<i class="fi fi-rr-phone-call"></i>}>Message me</Button>
            <Button className="tracking-wide font-light text-slate-600" size="sm" colorScheme="gray" variant="outline" leftIcon={<i class="fi fi-rr-document-signed"></i>}>See resume</Button>
          </Stack>

        </GridItem>
        <GridItem colSpan={2} w='100%' className="p-3">
          <Image src="/icon.jpg" borderRadius='full' className="p-3 ring-2 ring-slate-200"/>
        </GridItem>
      </Grid>


      <Divider/>

      <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
        <div className="flex justify-between align-middle">
          <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
          • EXPERIENCES
          </Heading>
          <Link href="/experiences">
            <Button className="bg-white p-3 py-4 shadow-md hover:bg-none" size='xs' rightIcon={<ArrowForwardIcon/>}>View all</Button>
          </Link>
        </div>

        {
          experiences.map(exp => {
            return(
              <Link href="/experiences">
              <Card className="p-5 my-2 rounded-lg w-full shadow-none transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
                <p className="tracking-wide leading-5 font-semibold text-sm text-gray-700">{exp.position}</p>
                <p className="tracking-wide leading-5 mt-2 font-light text-xs text-gray-500">{exp.company}</p>
                <p className="tracking-wide leading-5 text-xs text-gray-400">{exp.date}</p>
              </Card>
              </Link>
            )
          })
        }
        
      </Card> 

      <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
        <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
        • PROJECTS
        </Heading>

        <Card className="p-5 my-2">
          hello
        </Card>
        <Card className="p-5 my-2">
          hello
        </Card>

      </Card>

      <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
        <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
        • SKILLS
        </Heading>

        {
          skills.map(skill => {
            return(
              <Card className="p-5 my-2">
                <p className="text-xs mb-2 text-slate-500 font-semibold tracking-wide">{skill.name}</p>
                <Stack spacing={2} direction="row" align="center" wrap="wrap">
                  { skill.tech_stack.map(tech => {
                      return(<Tag variant="outline" className="text-xs rounded-2xl py-1 px-3">{tech}</Tag>)
                  })}
                </Stack>

              </Card>
            )
          })
        }

        {/* <Stack spacing={2} direction="row" align="center">
            {
              skills.map(tech => {
                return(<Tag size="sm" variant="outline" className="rounded-2xl py-1 px-3">{tech}</Tag>)
              })
            }
          </Stack> */}

      </Card>

      <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
        <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
        • EDUCATION
        </Heading>

        <Card className="p-5 my-2">
          hello
        </Card>
        <Card className="p-5 my-2">
          hello
        </Card>

      </Card>
      
      <Box className="py-10">
        <Center>
          <Heading className="font-semibold text-slate-700">Let's work together.</Heading>
        </Center>
        <Center>
          <p>Creating intuitive and user-friendly software applications</p>
        </Center>
      </Box>

    </Container>
  ) 
}
