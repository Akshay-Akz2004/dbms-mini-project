"use client"
import React from 'react'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import Courses from '@/lib/Courses'
import Popular from '@/Components/Popular'
import Hero2 from '@/Components/Hero2'

const page = () => {
  return (
    <div className='h-fit w-full'>
      <div className="hidden sm:block">
        <Header />
      </div>
      <Hero/>
      <Courses/>
      <div className='hidden sm:block'> 
      <Hero2/>
      <Popular/>
      </div>
    </div>
  )
}

export default page
