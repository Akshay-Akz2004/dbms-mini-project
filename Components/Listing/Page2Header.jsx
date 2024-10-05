"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Page2Header = () => {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(imageRef.current, {
      opacity: 0,
      x: -200,
      duration: 1,
      ease: "power3.out",
    })
    .from(textRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2, 
    }, "-=0.5"); 

  }, []);

  return (
    <div ref={headerRef} className='h-full px-28 py-16 w-full flex justify-center items-center gap-20 '>
      <div
        ref={imageRef}
        className='ml-12 h-4/5 w-96 rounded-md bg-cover bg-center'
        style={{ backgroundImage: `url('https://i.pinimg.com/564x/f5/8e/32/f58e32b78a3db1f517d5cb0eef087794.jpg')` }}
      ></div>
      
      <div ref={textRef} className='h-4/5 w-3/5 bg-white px-10 py-4'>
        <h1 className='font-bold text-blue-900'>
          Worried about university exams and career?
        </h1>
        <h1 className='text-4xl font-bold mt-5 mb-11 leading-snug text-slate-800'>
          "We provide <span className='text-red-500'>best resources</span> and support to guide you with our experienced instructors"
        </h1>
        <h1 className='mt-5 font-bold'>Ace your university exams</h1>
        <h1>Get better understanding of concepts with 24*7 support</h1>
        <h1 className='mt-5 font-bold '>Enhance your resume</h1>
        <h1 className='text-gray-500'>
          Join our skill-based programs and stand out from others!
        </h1>
        <h1 className='mt-5 font-bold '>Exchange your skills</h1>
        <h1>Join our skill-based programs and grow</h1>
      </div>
    </div>
  );
};

export default Page2Header;
