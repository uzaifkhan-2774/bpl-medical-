import Image from "next/image";

const About = () => {
  return (
    <div className="w-full 2xl:px-48 xl:px-16 lg:px-8 md:px-10 px-5 sm:px-6">
      <div className="bg-[#2EAAE1]  rounded-2xl text-white px-4 py-10  ">
        <div className="flex content-center flex-col md:flex-row justify-between sm:p-4 md:p-8 lg:p-12">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-[16px] md:text-[18px] leading-[24px] md:leading-[32px] font-semibold">ABOUT US</h1>
            <h1 className="text-[28px] md:text-[36px] leading-[38px] md:leading-40px] font-normal">
              Pioneers in Innovative,
            </h1>
            <h1 className="text-[28px] md:text-[36px] leading-[38px] md:leading-[40px] font-light">
              Medical Technology
            </h1>
          </div>
          <div className="w-full md:w-1/2 content-center">
            <p className="text-[14px] md:text-[16px] leading-[28px] md:leading-[25px] tracking-[-0.36px] font-light">
              “ Lörem ipsum nöt sygisk plasamma Odellplatta. Plan knäprotest polyamori. ”
            </p>
            <p className=" text-[14px] font-[Inter] font-thin mt-2">Mr. Sunil Khurana</p>
            <span className=" text-[12px] text-[#ffffff8e] font-[Inter] font-extralight">
              Chairman & Managing Director
            </span>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-12 py-4">
          <Image
            src="/assets/Frame 29 (1).svg"
            alt="Logo 1"
            width={0}
            height={0}
            className="rounded-[40px] sm:rounded-[10px] h-[96px] sm:h-[150px] md:h-[300px] lg:h-[400px] xl:h-full  w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center lg:pt-8 px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-12">
          <div className="w-full md:w-2/3 lg:w-[60%] mb-4 py-4 md:mb-0">
            <p className="text-[14px]  md:text-[16px]  leading-[21px] md:leading-[28px] font-light ">
              BPL MEDICAL TECHNOLOGIES the Indian multinational, spearheads pioneering efforts in medical technology and
              innovation, keeping with legacy since 1967. Synonymous with trust, our products and systems are certified
              by national and international quality agencies.
            </p>
          </div>
          <div className="flex justify-center   relative group">
         
            <button className="rounded-xl border  border-white  p-3 text-sm md:text-base font-bold text-white group-hover:opacity-0 transition duration-300 relative z-10">
              Learn More
            </button>
    
            <Image
              src="/assets/BUTTON 12 (1).svg"
              alt="Hover Button"
              layout="fixed"
              height={30} 
              width={130} 
              className=" absolute top- left- z-0 opacity-0 group-hover:opacity-100 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
