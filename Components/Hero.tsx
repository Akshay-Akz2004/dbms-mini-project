import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h1", {
      x: -300,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
    })
      .from(
        "p",
        {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=1.2"
      )
      .from(
        "button",
        {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "elastic.out(1, 0.75)",
        },
        "-=0.5"
      )
      .from(
        ".bg-animate",
        {
          y: 100,
          duration: 1,
          opacity: 0,
        },
        "-=1"
      );
  }, []);

  return (
    <div className="h-screen w-full p-8 flex flex-col lg:flex-row justify-between">
      <div className="h-full lg:w-1/2 w-full flex justify-center items-center">
        <div className="text-center lg:text-left">
        
          <div className="font-bold flex flex-col gap-3 text-3xl md:text-5xl text-nowrap text-start text-gray-900">
            <h1>Stay Ahead Of The Curve</h1>
            <h1>With our Affordable</h1>
            <h1>Courses</h1>
          </div>


          <div className="mt-6 md:mt-8 text-base text-start md:text-lg">
            <p>
              KTU ScholarHub is a platform for upscaling. Get maximum value for
              time
              <br className="hidden md:block" />
              and resources you invest, ace your university exams & bridge the
              gap
              <br className="hidden md:block" />
              between education and industry.
            </p>
          </div>

         
          <Link href="/Explore">
            <button className="bg-red-500 text-white text-lg md:text-xl mt-5 md:mt-7 px-8 md:px-10 py-3 rounded-lg">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div className="h-full lg:w-1/2 w-full relative mt-10 lg:mt-0 p-5 md:p-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-animate rounded-md"
          style={{
            backgroundImage: `url('https://pwskills.com/images/homePage/heroBgImage.webp')`,
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
