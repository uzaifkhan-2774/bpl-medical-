"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HomeCare = () => {
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    if (carouselContainerRef.current) {
      const tl = gsap.timeline({ repeat: -1, ease: "linear" });

      tl.to(carouselContainerRef.current, {
        xPercent: -100,
        duration: 5,
      })
        .to(carouselContainerRef.current, {
          xPercent: 0,
          duration: 5,
        })
        .to(carouselContainerRef.current, {
          xPercent: 100,
          duration: 5,
        })
        .to(carouselContainerRef.current, {
          xPercent: 0,
          duration: 5,
        });
    }
  }, []);

  return (
    <div className="  relative overflow-hidden border-t-2 border-b-2 border-[#2EAAE1]  mt-4 mb-10 py-4 2xl:mx-48 xl:mx-16 lg:mx-8 md:mx-10 mx-5 sm:mx-6 ">
      <div
        className="flex space-x-8 px-8 py-6 mx-4 md:mx-8"
        ref={carouselContainerRef}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          whiteSpace: "nowrap",   
        }}
      >
        <div className="flex items-center gap-6">
          <h1 className="text-[#2EAAE1] text-4xl md:text-5xl font-medium leading-tight mb-0 text-center">
            HOME CARE
          </h1>
          <Image
            src="/assets/pseudo.svg"
            alt="Logo 1"
            width={192}
            height={40}
            className="w-[192px] h-[40px]"
          />
          <h1 className="text-[#2EAAE1] text-4xl md:text-5xl font-medium leading-tight mb-0 text-center">
            MOTHER AND CHILD CARE
          </h1>
          <Image
            src="/assets/pseudo.svg"
            alt="Logo 2"
            width={192}
            height={40}
            className="w-[192px] h-[40px]"
          />
          <h1 className="text-[#2EAAE1] text-4xl md:text-5xl font-medium leading-tight mb-0 text-center">
            CARDIOLOGY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeCare;
