"use client"
import ProjectsSection from '@/components/ProjectsSection';
import { Button, Card } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    document.title = 'Sheila Craus | Projects';
  }, []);
  return (
    <main>
      <ProjectsSection show_details/>
    </main>
  )
}
