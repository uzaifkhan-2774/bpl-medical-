import Image from 'next/image';
import React from 'react';

const Healthcare = () => {
  return (
    <div className="m-4 md:m-6 lg:m-12 border-b-2 pb-16 sm:text-center border-sky-400 relative 2xl:mx-48 xl:mx-16 lg:mx-8 md:mx-10 sm:mx-6 ">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px]">
        <Image
          src="/assets/Rectangle 2.svg"
          alt="rectangle"
          layout="fill"
          className="object-cover rounded-[30px]"
        />
        <h1 className="text-white font-poppins font-medium absolute inset-0 flex flex-col justify-center items-center text-[20px] md:text-[28px] lg:text-[36px]">
          Growing Stronger, Together. <br /> 9 Years of Transforming Healthcare
        </h1>
        <div className='relative group sm:left-[44%] sm:top-[70%] left-[32%] top-[80%] w-[123px] h-[38px]'>
        <button   className=" Font-Poppins opacity-100 font-semibold text-[14px] leading-[21px] text-[#000000] py-2 px-5 bg-[#FFFFFF] rounded-xl shadow-lg group-hover:opacity-0 transition duration-500">
          Learn More
        </button>
        

             <Image src="\assets\Learn more arrow bt.svg"
          alt="Learn More"
          height={50}
          width={140}
          className=" absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"/>
        </div>
      </div> 
    </div>
  );
};

export default Healthcare;
