import { projects } from '@/utils/constants'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, Collapse, Divider, Heading, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TechStack from './TechStack'

export default function ProjectsSection({show_details}) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
        <div className="flex justify-between align-middle">
          <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
          • PROJECTS
          </Heading>
          {
            !show_details &&
            <Link href="/projects">
              <Button className="bg-white p-3 py-4 shadow-md hover:bg-none" size='xs' rightIcon={<ArrowForwardIcon/>}>View all</Button>
            </Link>
          }
        </div>
        <SimpleGrid columns={1} spacing={2}>
        {
          projects.map(project => {
            return(
              <Card className="rounded-lg w-full shadow-none">
                <CardBody className="p-3">
                  {/* {
                    project.screenshots.map((photo, index) => {
                      return(
                        <Image key={index} src={photo} alt={project.name} />
                        )
                      })
                    } */}
                  {
                    show_details ?
                    <Image src={project.thumbnail} alt={project.name} />
                    :
                    <Image src={project.thumbnail} alt={project.name} />
                  }

                  <p className="mt-3 tracking-wide leading-5 font-semibold text-sm text-gray-700 m-0">{project.name}</p>

                  {
                    show_details &&
                    <Stack gap={1} direction='row' className='mt-2'>
                      {
                        project?.tech_stack.map((tech, index) => {
                          return(
                            <TechStack key={index} file_name={tech.file_name} label={tech.label} />
                          )
                        })
                      }
                    </Stack>
                  }

                  {
                    show_details &&
                    <>
                    <Stack gap={2} direction='row' className='mt-4'>
                      <Link href={project.link}>
                      <Button size='sm' onClick={onToggle} className="tracking-wide font-normal text-slate-600" colorScheme="gray" variant="outline">
                        Visit
                      </Button>
                      </Link>
                      <Button size='sm' onClick={onToggle} className="tracking-wide font-normal text-slate-600" colorScheme="gray" variant="outline">
                        Learn more
                      </Button>
                    </Stack>

                    <Collapse in={isOpen} animateOpacity>
                      <Box mt='2'>
                        <Divider className='mt-4 mb-2'/>
                        <p className="py-1 tracking-wide leading-5 text-xs text-gray-500">
                          {project.long_description}
                        </p>
                      </Box>
                    </Collapse>
                    </>
                  }

                </CardBody>
              </Card>
              )
          })
        }
        </SimpleGrid>
      </Card>
  )
}
