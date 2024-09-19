import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full p-8 flex justify-between">
      <div className="h-full w-1/2  flex justify-center items-center">
        <div className="">
          <div className="font-bold flex flex-col gap-3 text-5xl text-gray-900">
          <h1>Stay Ahead Of The curve</h1>
          <h1>With our Affordable</h1>
          <h1>Courses</h1>
          </div>
          <div className="mt-8">
            <p>KTU ScholarHub is a platform for upscaling. Get maximum value for time<br></br>
and resources you invest, ace your university exams & bridge gap,<br></br>
between education and industry.</p>
          </div>
          <button className="bg-red-500 text-white text-xl mt-7 px-10 py-3 rounded-lg">
            Explore Now
          </button>
        </div>
      </div>
      <div className="h-full w-1/2 relative p-10 ">
        <div
          className="absolute inset-0 bg-cover bg-center rounded"
          style={{
            backgroundImage: `url('https://pwskills.com/images/homePage/heroBgImage.webp')`,
            backgroundSize: "80%", // Reduce the size of the background image
            backgroundRepeat: "no-repeat", // Ensure the image doesn't repeat
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
