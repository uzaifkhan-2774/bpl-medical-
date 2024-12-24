import Image from "next/image";
import React from "react";

const Logs = () => {
  return (
    <div className="my-4 sm:my-6 lg:my-12 border-b-2 border-sky-400 2xl:mx-48 xl:mx-16 lg:mx-8 md:mx-10 mx-5 sm:mx-6 ">
      <div className="pt-10 sm:pt-16 lg:pt-10 flex flex-wrap lg:flex-nowrap justify-between">
        <div className="w-full lg:w-auto">
          <p className="text-[14px] sm:text-[16px] leading-[24px] sm:leading-[32px] tracking-[0.72px] font-medium Font-[Poppins] text-[#898989]">
            Blogs
          </p>
          <h1 className="text-[28px] sm:text-[36px] md:text-[45px] leading-[36px] sm:leading-[48px] md:leading-[57px] tracking-[-1.2px] font-normal Font-[Poppins]">
            Check our Latest Blogs
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
        {/* Blog Card 1 */}
        <div className="w-full border shadow-sm rounded-3xl flex flex-col justify-between">
          <Image
            src="/assets/Blog (3).svg"
            alt="blog"
            height={0}
            width={0}
            className="h-[200px] sm:h-[220px] md:h-[240px] w-full rounded-t-3xl object-cover p-[5px]"
          />
          <div className="p-4">
            <p className="text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] font-medium text-[#6E6E6E]">
              February-2023
            </p>
            <h1 className="text-[18px] sm:text-[22px] md:text-[24px] leading-[24px] sm:leading-[28px] tracking-[-0.24px] text-left font-medium text-[#16171C]">
              Technological Advancements in Mechanical Ventilation
            </h1>
            <h1 className="text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] tracking-[-0.14px] text-left font-medium text-[#898989]">
              Ventilators are medical devices generally found in a healthcare
              setting, that provide respiratory support to patients who are
              incapable of the success of the company.
            </h1>
          </div>
          <div className="relative group flex justify-center my-6 mx-auto ">
            <button className="py-2 px-8 sm:px-12 lg:px-24 text-[14px] sm:text-[15px] leading-[20px] tracking-[-0.14px] border rounded-lg font-medium border-black transition-all duration-300 opacity-100 group-hover:opacity-0">
              Learn More
            </button>
            <Image
              src="/assets/LM long arrow bt.svg"
              alt="Learn More"
              height={80}
              width={270}
              className="absolute top-0 opacity-0 group-hover:opacity-100 transition duration-500"
            />
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="w-full border shadow-sm rounded-3xl flex flex-col justify-between">
          <Image
            src="/assets/Blog (4).svg"
            alt="blog"
            height={0}
            width={0}
            className="h-[200px] sm:h-[220px] md:h-[240px] w-full rounded-t-3xl object-cover p-[5px]"
          />
          <div className="p-4">
            <p className="text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] font-medium text-[#6E6E6E]">
              September-2022
            </p>
            <h1 className="text-[18px] sm:text-[22px] md:text-[24px] leading-[24px] sm:leading-[28px] tracking-[-0.24px] text-left font-medium text-[#16171C]">
              Electrosurgery - All you need to know
            </h1>
            <h1 className="text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] tracking-[-0.14px] text-left font-medium text-[#898989]">
              Electrosurgery is a technique often used in a medical or surgical
              context. An electrosurgical generator along with accessories are
              intended for cutting, coagulation, vessel sealing and resection.
            </h1>
          </div>
          <div className="relative group flex justify-center my-6 mx-auto">
            <button className="py-2 px-8 sm:px-12 lg:px-24 text-[14px] sm:text-[15px] leading-[20px] tracking-[-0.14px] border rounded-lg font-medium border-black transition-all duration-300 opacity-100 group-hover:opacity-0">
              Learn More
            </button>
            <Image
              src="/assets/LM long arrow bt.svg"
              alt="Learn More"
              height={80}
              width={270}
              className="absolute top-0 opacity-0 group-hover:opacity-100 transition duration-500"
            />
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="w-full border shadow-sm rounded-3xl flex flex-col justify-between">
          <Image
            src="/assets/Blog (5).svg"
            alt="blog"
            height={0}
            width={0}
            className="h-[200px] sm:h-[220px] md:h-[240px] w-full rounded-t-3xl object-cover p-[5px]"
          />
          <div className="p-4">
            <p className="text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] font-medium text-[#6E6E6E]">
              July-2023
            </p>
            <h1 className="text-[18px] sm:text-[22px] md:text-[24px] leading-[24px] sm:leading-[28px] tracking-[-0.24px] text-left font-medium text-[#16171C]">
              4 vital signs for a healthy heart you should know
            </h1>
            <h1 className="text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] tracking-[-0.14px] text-left font-medium text-[#898989]">
              Blood pressure exomony indicates us how to place some value to
              indicates how hard your heart works (at rest as well as during a
              physical activity) and the condition of your blood vessels.
            </h1>
          </div>
          <div className="relative group flex justify-center my-6 mx-auto ">
            <button className="py-2 px-8 sm:px-12 lg:px-24 text-[14px] sm:text-[15px] leading-[20px] tracking-[-0.14px] border rounded-lg font-medium border-black transition-all duration-300 opacity-100 group-hover:opacity-0">
              Learn More
            </button>
            <Image
              src="/assets/LM long arrow bt.svg"
              alt="Learn More"
              height={80}
              width={270}
              className="absolute top-0   opacity-0 group-hover:opacity-100 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
