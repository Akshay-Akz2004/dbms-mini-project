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
      .from("p", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      }, "-=1.2") 
      .from("button", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
      }, "-=0.5") 
      .from(".bg-animate", {
        y: 100,
        duration: 1,
        opacity: 0,
      }, "-=1");
  }, []);

  return (
    <div className="h-screen w-full p-8 flex justify-between">
      <div className="h-full w-1/2 flex justify-center items-center">
        <div>
          <div className="font-bold flex flex-col gap-3 text-5xl text-gray-900">
            <h1>Stay Ahead Of The Curve</h1>
            <h1>With our Affordable</h1>
            <h1>Courses</h1>
          </div>
          <div className="mt-8">
            <p>
              KTU ScholarHub is a platform for upscaling. Get maximum value for
              time<br />
              and resources you invest, ace your university exams & bridge the gap
              <br />
              between education and industry.
            </p>
          </div>
          <Link href="/Explore">
            <button className="bg-red-500 text-white text-xl mt-7 px-10 py-3 rounded-lg">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div className="h-full w-1/2 relative p-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-animate rounded"
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
