import React from 'react'

const Cat = (props) => {
  return (
    <div className='p-2 rounded-2xl border border-solid border-black text-black hover:text-white hover:bg-black'>
      <h1 className='text-xs' >{props.name}</h1>
    </div>
    
  )
}

export default Cat
