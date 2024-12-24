import Image from "next/image";

const Speciality = () => {
  return (
    <div className="py-6 md:py-12 2xl:px-48 xl:px-16 lg:px-8 md:px-10 px-5 sm:px-6 h-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
      <h1 className="text-[28px] md:text-[36px] lg:text-[48px] leading-[34px] md:leading-[45px] lg:leading-[57px] font-montserrat">
        Our Specialities
      </h1>
      <div className="max-w-full lg:max-w-[450px]">
        <p className="text-[14px] md:text-[16px] leading-[28px] md:leading-[34px] font-normal text-[#898989] font-poppins mb-4">
          Critical care to mobile health, BPL is the preferred choice for total
          solutions across specialties.
        </p>
      <div className="relative group">
      <button className="border border-black rounded-xl px-3 py-2 opacity-100 group-hover:opacity-0 md:px-6 md:py-2.5 text-sm md:text-base font-bold ">
          Learn More
     
        </button>
        <Image src="\assets\Learn more arrow bt.svg"
          alt="Learn More"
          height={48}
          width={140}
          className=" absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"/>
      </div>
      </div>
    </div>
  );
};

export default Speciality;
