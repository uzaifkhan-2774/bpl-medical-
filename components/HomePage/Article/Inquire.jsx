"use client";
import React, { useState } from "react";
import Image from "next/image";

const Inquire = () => {
  return(
    <div className="relative group mt-6 mb-6 sm:mb-16  mx-5 lg:mx-48 md:mx-24 sm:mx-12 sm:mt-12 2xl:mx-56 2xl:my-28 flex justify-center ">
   
    <Image src="\assets\Property 1=Frame 1000002158.svg"
      height={0}
      width={0}
      alt="frame 1"
      className="opacity-100 group-hover:opacity-0 h-full w-full transition duration-800 "/>

    
      
       <Image src="\assets\Property 1=Frame 1000002303.svg"
      height={0}
      width={0}
      alt="frame 2"
      className=" absolute top-0 left-0 opacity-0 group-hover:opacity-100  w-full h-full   transition duration-1000 "/>
    </div>
 
  );
};

export default Inquire;
