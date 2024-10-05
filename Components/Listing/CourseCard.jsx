import React from 'react';

const CourseCard = ({ courseName, price, rating, image ,onClick}) => {
  return (
    <div className='p-4' onClick={onClick} style={{cursor:'pointer'}}>
      <div className='h-56 w-72 bg-center bg-cover rounded-t-lg' style={{ backgroundImage: `url(${image})` }}></div>
      <div className='h-32 w-72 bg-slate-200 p-2 rounded-lg'>
        <h1 className='font-bold'>{courseName}</h1>
        <h1>Duration: 2 months</h1>
        <h1>Price: ${price}</h1>
        <h1>Rating: {rating}</h1>
      </div>
    </div>
  );
};

export default CourseCard;
