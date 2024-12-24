"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "/assets/Group 123 (1).svg",
      title: "BPL Medical Oxygen Concentrators",
      description:
        "Designed with pressure swing adsorption Technology and has functionalities like built-in nebulizer, LCD screen, Purity indicator, Timer function & storage compartment.",
    },
    {
      image: "/assets/Group 123 (3).svg",
      title: "Vivid vue series",
      description:
        "Reliable patient monitoring is very important during critical care. BPL Medical offers an array of high-quality and affordable patient monitors for your practice, developed to get you the correct data you require easily, securely and quickly.",
    },
    {
      image: "/assets/Group 123 (4).svg",
      title: "Leoni PLus HFO",
      description:
        "Introducing X-CUBE 90 on GPX, the ultimate solution for healthcare providers. With clear, detailed images and a user-friendly interface, experience unparalleled efficiency and diagnostic accuracy.",
    },
    {
      image:"/assets/Group 123 (2).svg",
      title:"X-CUBE 90 on GPX",
      description:"Introducing X-CUBE 90 on GPX, the ultimate solution for healthcare providers. With clear, detailed images and a user-friendly interface, experience unparalleled efficiency and diagnostic accuracy.",

    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full 2xl:px-48 xl:px-16 lg:px-8 md:px-10 px-5 ">
      <div className="flex flex-col md:flex-row md:justify-between w-full min-w-full md:items-center">
     
        <div className="flex flex-col   py-1 md:py-24 w-full md:w-1/2">
          <div className=" py-24 md:py-0  ">
            <h1 className="font-medium text-2xl md:text-4xl lg:text-5xl leading-[32px] md:leading-[46.8px]  lg:leading-[60px] mb-4">
              {slides[currentIndex].title}
            </h1>
            <p className="font-normal text-sm md:text-base lg:text-lg leading-[21px] md:leading-[24px] text-[#00000080] mb-6">
              {slides[currentIndex].description}
            </p>

            <div className="relative group w-32">
              <Image
                src="/assets/Learn More bt.svg"
                alt="Learn More"
                height={40}
                width={120}
                className="opacity-100 group-hover:opacity-0 transition duration-500"
              />
              <div className="absolute top-0 left-0">
                <Image
                  src="/assets/Learn more arrow bt.svg"
                  alt="Learn More Arrow"
                  height={40}
                  width={120}
                  className="opacity-0 group-hover:opacity-100 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        
        <div className="relative flex flex-col items-center w-full md:w-1/2 py-12 md:py-24">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden mb-4">
  <img
    src={slides[currentIndex].image}
    alt={`Slide ${currentIndex + 1}`}
    className="w-full h-full object-contain transition-transform duration-500"
  />
</div>

        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            } inline-block cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
