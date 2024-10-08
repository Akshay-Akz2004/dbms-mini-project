import React from 'react'
import Page2Header from '@/Components/Listing/Page2Header'
import Header from '@/Components/Header'
import Mid from '@/Components/Listing/Mid'
const page = () => {
  return (
    <div className='h-screen  w-full overflow'>
        <div className='hidden sm:block'>
        <Header/>
        </div>
      <Page2Header/>
      <Mid/>
    </div>
  )
}

export default page