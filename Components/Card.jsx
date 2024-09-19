import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className='py-2 w-64 bg-slate-100 rounded-lg'>
      <div
        className="h-60 w-64 rounded-lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className='p-2'>
        <h1 className='font-bold'>{title}</h1>
        <p className='text-xs text-gray-500 mt-1'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
