import Image from "next/image";
import React from "react";

function Event() {
  return (
    <div className="my-4 sm:my-6 lg:my-10 border-y-2 border-sky-300 2xl:mx-48 xl:mx-16 lg:mx-8 md:mx-10 mx-5 sm:mx-6 ">
      <div className="pt-10 sm:pt-16 lg:pt-20 flex flex-wrap lg:flex-nowrap justify-between">
        <div className="w-full lg:w-auto">
          <p className="text-[14px] sm:text-[16px] leading-[24px] sm:leading-[32px] tracking-[0.72px] font-medium Font-[Poppins] text-[#898989]">
            News & Events
          </p>
          <h1 className="text-[28px] sm:text-[36px] md:text-[45px] leading-[36px] sm:leading-[48px] md:leading-[57px] tracking-[-1.2px] font-normal Font-[Poppins]">
            Check our Latest News & Events
          </h1>
        </div>
        <div className="flex items-end justify-center mt-6 lg:mt-0 relative group">
          <button className="text-[14px] leading-[21px] sm:text-[14px] sm:leading-[21px] tracking-[0.72px] font-semibold Font-[Poppins] text-[#000000] border border-black px-6 sm:px-8 py-2 rounded-lg opacity-100 group-hover:opacity-0">
            See All
          </button>
          <Image
            src="/assets/See All Arrow bt.svg"
            alt="Learn More"
            height={50}
            width={140}
            className="absolute opacity-0 group-hover:opacity-100 transition duration-500"
          />
        </div>
      </div>

      <div className="pb-10 sm:pb-16 lg:pb-20 pt-6 sm:pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-14">
       
        <div className="w-full border shadow-sm rounded-3xl flex flex-col justify-between">
          <Image
            src="/assets/Blog.svg"
            alt="blog"
            height={0}
            width={0}
            className="h-[200px] sm:h-[220px] md:h-[240px] w-full rounded-t-3xl object-cover p-[5px]"
          />
          <p className="p-4 text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] font-medium text-[#6E6E6E]">
            February-2023
          </p>
          <h1 className="px-4 text-[18px] sm:text-[22px] md:text-[24px] leading-[24px] sm:leading-[28px] tracking-[-0.24px] text-left font-medium text-[#16171C]">
            Union Budget 2023: Reflection by Mr. Sunil Khurana - CEO & MD, BPL Medical Technologies
          </h1>
          <h1 className="p-4 text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] tracking-[-0.14px] text-left font-medium text-[#898989]">
            Lörem ipsum retronym id-sprej, i nins, rektigt mobilzombie och blandkostare.
          </h1>
          <div className="relative group flex justify-center mx-auto mt-6 mb-6">
            <button className="py-2 h-full px-12 sm:px-16 lg:px-24 text-[14px] sm:text-[15px] leading-[20px] tracking-[-0.14px] border rounded-lg font-medium border-black block transition-all duration-300 opacity-100 group-hover:opacity-0">
              Learn More
            </button>
            <Image
              src="/assets/LM long arrow bt.svg"
              alt="Learn More"
              height={80}
              width={270}
              className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition duration-500"
            />
          </div>
        </div>

      
        <div className="w-full border shadow-sm rounded-3xl flex flex-col justify-between">
          <Image
            src="/assets/Blog (1).svg"
            alt="blog 1"
            height={0}
            width={0}
            className="h-[200px] sm:h-[220px] md:h-[240px] w-full rounded-t-3xl object-cover p-[5px]"
          />
          <p className="p-4 text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] font-medium text-[#6E6E6E]">
            September-2022
          </p>
          <h1 className="px-4 text-[18px] sm:text-[22px] md:text-[24px] leading-[24px] sm:leading-[28px] tracking-[-0.24px] text-left font-medium text-[#16171C]">
            Inauguration of a new manufacturing facility in Bangalore
          </h1>
          <h1 className="p-4 text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] tracking-[-0.14px] text-left font-medium text-[#898989]">
            Lörem ipsum retronym id-sprej, i nins, rektigt mobilzombie och blandkostare.sldfs sldfoi
          </h1>
          <div className="relative group  flex justify-center mx-auto mt-6 mb-6">
            <button className="py-2 px-12 sm:px-16 lg:px-24 text-[14px] sm:text-[15px] leading-[20px] tracking-[-0.14px] border rounded-lg font-medium border-black block transition-all duration-300 opacity-100 group-hover:opacity-0">
              Learn More
            </button>
            <Image
              src="/assets/LM long arrow bt.svg"
              alt="Learn More"
              height={80}
              width={270}
              className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition duration-500"
            />
          </div>
        </div>

       
        <div className="w-full border shadow-sm rounded-3xl flex flex-col justify-between">
          <Image
            src="/assets/Blog (2).svg"
            alt="blog 2"
            height={0}
            width={0}
            className="h-[200px] sm:h-[220px] md:h-[240px] w-full rounded-t-3xl object-cover p-[5px]"
          />
          <p className="p-4 text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] font-medium text-[#6E6E6E]">
            July-2023
          </p>
          <h1 className="px-4 text-[18px] sm:text-[22px] md:text-[24px] leading-[24px] sm:leading-[28px] tracking-[-0.24px] text-left font-medium text-[#16171C]">
            Lörem ipsum retronym id-sprej, i nins, rektigt lorem ipsum tyrey rety
          </h1>
          <h1 className="p-4 text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] tracking-[-0.14px] text-left font-medium text-[#898989]">
            Lörem ipsum retronym id-sprej, i nins, rektigt mobilzombie och blandkostare.
          </h1>
          <div className="relative group flex justify-center mx-auto mt-6 mb-6">
            <button className="py-2 px-12 sm:px-16 lg:px-24 text-[14px] sm:text-[15px] leading-[20px] tracking-[-0.14px] border rounded-lg font-medium border-black block transition-all duration-300 opacity-100 group-hover:opacity-0">
              Learn More
            </button>
            <Image
              src="/assets/LM long arrow bt.svg"
              alt="Learn More"
              height={80}
              width={270}
              className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
