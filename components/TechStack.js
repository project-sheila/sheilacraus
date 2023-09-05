import { Stack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

/**
 * 
 * @param {string} file_name 
 * @param {string} label 
 * @returns
 */
export default function TechStack({file_name, label}) {
  return (
    <div className='flex align-middle gap-1 bg-slate-50 p-1 rounded-xl w-fit pl-2 pr-2'>
      <Image src={file_name} width='auto' height={16} />
      <p className='text-xs'>{label}</p>
    </div>
  )
}
