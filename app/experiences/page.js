"use client"
import ExperiencesSection from '@/components/ExperiencesSection';
import React, { useEffect } from 'react'

export default function Experiences() {
  useEffect(() => {
    document.title = 'Sheila Craus | Experiences';
  }, []);
  return (
    <main>
      <ExperiencesSection show_details/>
    </main>
  )
}
