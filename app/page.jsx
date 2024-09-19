"use client"
import React from 'react'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import Courses from '@/lib/Courses'
const page = () => {
  return (
    <div className='h-fit w-full'>
      <Header/>
      <Hero/>
      <Courses/>
    </div>
  )
}

export default page
