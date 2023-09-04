import { projects } from '@/utils/constants'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Card, CardBody, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectsSection() {
  return (
    <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
        <div className="flex justify-between align-middle">
          <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
          • PROJECTS
          </Heading>
          <Link href="/projects">
            <Button className="bg-white p-3 py-4 shadow-md hover:bg-none" size='xs' rightIcon={<ArrowForwardIcon/>}>View all</Button>
          </Link>
        </div>
        <SimpleGrid columns={2} spacing={2}>
        {
          projects.map(project => {
            return(
              <Link key={project.name} href={project.link} target="_blank">
              <Card className="rounded-lg w-full shadow-none transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
                <CardBody className="p-3">
                  {/* {
                    project.screenshots.map((photo, index) => {
                      return(
                        <Image key={index} src={photo} alt={project.name} />
                        )
                      })
                    } */}
                  <Image src={project.thumbnail} alt={project.name} />
                  <Stack mt='2' spacing='3'>
                    <p className="tracking-wide leading-5 font-semibold text-sm text-gray-700 m-0">{project.name}</p>
                  </Stack>
                </CardBody>
              </Card>
              </Link>
              )
          })
        }
        </SimpleGrid>
      </Card>
  )
}
