import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen w-full p-8 flex'>
      <div 
        className=" ml-24 mt-2 h-2/3 w-1/2 bg-[url('https://cdni.iconscout.com/illustration/premium/thumb/female-teacher-teaching-her-student-2769749-2302767.png')] bg-cover bg-center"
      >
      </div>
      <div className=' pt-40 font-mono'>
        <h1 className='text-6xl'>Learn,Share and</h1>
        <h1 className='text-6xl mt-3'><span className='text-red-800'>Grow </span>together</h1>
      </div>
    </div>
  )
}

export default Hero
