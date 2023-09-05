import { experiences } from '@/utils/constants'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Card, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function ExperiencesSection({show_details}) {
  return (
    <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
        <div className="flex justify-between align-middle">
          <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
          • EXPERIENCES
          </Heading>
          {
            !show_details &&
            <Link href="/experiences">
                <Button className="bg-white p-3 py-4 shadow-md hover:bg-none" size='xs' rightIcon={<ArrowForwardIcon/>}>View all</Button>
            </Link>
          }
        </div>

        {
          experiences.map(exp => {
            return(
              <Box key={exp.id} className="p-5 my-2 rounded-lg w-full shadow-none bg-white">
                <p className="tracking-wide leading-5 font-semibold text-sm text-gray-700">{exp.position}</p>
                <p className="tracking-wide leading-5 mt-2 font-light text-xs text-gray-500">{exp.company}</p>
                <p className="tracking-wide leading-5 text-xs text-gray-400">{exp.date}</p>
                { show_details && 
                    <div className='ml-3 mt-3'>
                        {
                            exp.description.map((desc, index) => {
                                return(
                                    <p key={index} className="py-1 tracking-wide leading-5 text-xs text-gray-700">• {desc}</p>
                                )
                            })
                        }
                    </div>
                }
              </Box>
            )
          })
        }
    </Card> 
  )
}
