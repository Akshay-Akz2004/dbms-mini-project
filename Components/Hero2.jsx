import React from 'react';

const Hero2 = () => {
  return (
    <div className='h-screen w-full flex'>
        <div className='h-screen w-1/2 flex items-center justify-center p-8'>
        <div >
        <h2 className='text-5xl font-bold'>Where Learning Meets</h2>
        <h2 className='text-5xl font-bold mt-3'>Expectations</h2>

        <p className='mt-7 text-lg'>At KTU ScholarHub, we are Revolutionising your journey <br />of stepping your first foot into your Career through our <br /> college programs with partnering up with Top Tier <br /> Colleges</p>
        <p></p>
        </div>
      </div>
      <div
        className='h-screen w-1/2 bg-cover bg-center '
        style={{
          backgroundImage: "url('https://pwskills.com/images/masterClass/masterclass_landing.svg')",
          backgroundSize: "70%", // Reduce the size of the background image
        backgroundRepeat: "no-repeat", // Ensure the image doesn't repeat
        }}
      >
      </div>
    </div>
  );
};

export default Hero2;
