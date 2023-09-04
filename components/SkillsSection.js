import { skills } from '@/utils/constants'
import { Card, Center, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function SkillsSection() {
  return (
    <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
        <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
        • SKILLS
        </Heading>

        {
          skills.map(skill => {
            if (skill.main){
              return(
                <Card className="p-5 my-2 rounded-lg w-full shadow-none transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
                <Flex gap={4}>
                    <Center>
                      <Image src={skill.icon} width={32} height={32}/>
                    </Center>
                    <Center>
                      <p className="tracking-wide leading-5 font-semibold text-sm text-gray-700">{skill.name}</p>
                    </Center>
                </Flex>
                </Card>
              )
            } else {
              return null
            }
          })
        }
      </Card>
  )
}
