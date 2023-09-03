"use client"
import { Button, Card } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    document.title = 'Sheila Craus | Projects';
  }, []);
  return (
    <main>
        <h1>Projects</h1>
    </main>
  )
}
