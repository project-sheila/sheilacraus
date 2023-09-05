import { education } from '@/utils/constants'
import { Card, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function EducationSection() {
  return (
    <Card className="bg-slate-100 my-5 p-5 shadow-none rounded-xl">
        <Heading size="sm" className="my-2 mb-5 font-semibold text-gray-500 tracking-widest">
        • EDUCATION
        </Heading>
        {
          education.map(school => {
            return(
            <Link key={school.id} href={school.certificate_link || "/"} target="_blank">
            <Card className="p-5 my-2 rounded-lg w-full shadow-none transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
              <p className="tracking-wide leading-5 font-semibold text-sm text-gray-700">{school.title}</p>
              <p className="tracking-wide leading-5 mt-2 font-light text-xs text-gray-500">{school.place}</p>
              <p className="tracking-wide leading-5 text-xs text-gray-400">{school.date}</p>
            </Card>
            </Link>
            )
          })
        }
    </Card>
  )
}
