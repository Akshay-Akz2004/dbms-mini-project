import React from 'react'

const Header = () => {
  return (
    <div className='p-5 ml-12 mt-3 flex justify-evenly items-center text-black'>
      <h1 className='text-2xl font-bold mr-20'>CraftedMinds.in</h1>
      <div className='flex items-center gap-8 flex-grow'>
        <div className='w-2/3 mr-10'> 
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className='flex items-center gap-2 text-xl'>
          <h2>Welcome,</h2>
          <h2 className='font-bold'>Username</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
