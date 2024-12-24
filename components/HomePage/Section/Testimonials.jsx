
"use client";
import Image from "next/image";
import React, { useRef, useEffect, use } from "react";
import gsap from "gsap";

const Testimonials = () => {
  const data = [
    {
      name: "Dr. Rajib Bhattacharya",
      hospital: "Guwahati Medical College Hospital, Assam",
      testimonial:
        "For the last couple of years I am using BPL patient monitors and ECG machines and as per my observation the products are up to the mark and better than those of competitors",
      Image: "/assets/man in black.jpg",
    },
    {
      name: "Dr. Thomas Methews",
      hospital: "Madrid Medical College Hospital, Spain",
      testimonial:
        "For the last couple of years I am using BPL patient monitors and ECG machines and as per my observation the products are up to the mark and better than those of competitors.",
      Image: "/assets/tim coook.jpg",
    },
    {
      name: " Dr. Geroge Edlide",
      hospital: "Amberstang Medical College Hospital, Germany",
      testimonial:
        "For the last couple of years I am using BPL patient monitors and ECG machines and as per my observation the products are up to the mark and better than those of competitors.",
      Image: "/assets/white tshirt.jpg",
    },
    {
      name: " Dr. Jochim Schork",
      hospital: "Mankind Medical College Hospital, UK",
      testimonial:
        "For the last couple of years I am using BPL patient monitors and ECG machines and as per my observation the products are up to the mark and better than those of competitors.",
      Image: "/assets/jockim schork.jpg",
    },
  ];

  const left = useRef(null);
  const right = useRef(null);
  const center= useRef(null);

  useEffect(() => {
    const ani1 = gsap.to(left.current, { duration: 10, y: '-260%', repeat: -1 });
    const ani2 = gsap.to(right.current, { duration: 10, y: '24%', repeat: -1 });
    const ani3 = gsap.to(center.current,{duration:10, y:"24%", repeat:-1});
    return () => {
      ani1.kill();
      ani2.kill();
      ani3.kill();
    };
  }, []);

  return (
    <div className="2xl:px-48 xl:px-16 lg:px-8 md:px-10 px-5 sm:px-6 py-8 ">
    <div className="text-[#FFFFFF] bg-sky-400 rounded-xl p-8">
      <div className="p-12 flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-[16px] leading-[32px] tracking-[0.72px] font-semibold">TESTIMONIALS</h1>
          <h1 className="text-[36px] w-full md:w-80 py-4 leading-[46px] tracking-[-1.44px] font-medium">What our clients say about us</h1>
        </div>

        <div className="flex items-center mt-4 md:mt-0">
          <p className="text-[16px] w-full md:w-96 leading-[24px] tracking-[-0.35px] font-normal">
            We are absolutely thrilled to share our testimonials with all of you!
          </p>
        </div>
      </div>

      <div className="h-[458px] w-full overflow-y-hidden flex flex-col md:flex-row justify-between gap-10 2xl:gap-20">
        {/* Left */}
        <div ref={left} className="w-full md:w-[50%]   mt-28 flex flex-col gap-5">
          {data.map((item, index) => (
            <div className='w-full hidden md:block lg:block xl:block 2xl:block sm:hidden ' key={index}>
              <div className="border p-4 border-white w-full rounded-3xl h-[400px] md:h-[320px] lg:h-[280px]">
                <div className="h-[70px] w-[70px] rounded-full border border-white">
                  {typeof item.Image === "string" ? (
                    <img src={item.Image} alt="User" className="h-full w-full rounded-full" />
                  ) : (
                    item.Image
                  )}
                </div>
                <div>
                  <h1 className="text-[20px] leading-[30px] tracking-[-0.36] py-2 text-[#FFFFFF]">{item.name}</h1>
                  <p className="text-[12px] leading-[18px] tracking-[-0.36] font-normal pb-2 text-[#FFFFFF]">{item.hospital}</p>
                  <p className="text-[16px] leading-[24px] tracking-[-0.36] font-normal py-3 text-[#FFFFFF]">{item.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
         
         {/*right*/}
      
        <div ref={right} className="w-full md:w-[50%] translate-y-[-231%]  flex flex-col gap-5">
          {data.map((item, index) => (
            <div className='w-full hidden md:block' key={index}>
              <div className="w-full p-4 border border-white rounded-3xl h-[330px]  sm:h-[291px] md:h-[320px] lg:h-[280px]  ">
                <div className="h-[70px] w-[70px] rounded-full border border-white">
                  {typeof item.Image === "string" ? (
                    <img src={item.Image} alt="User" className="h-full w-full rounded-full" />
                  ) : (
                    item.Image
                  )}
                </div>
                <div>
                  <h1 className="text-[20px] leading-[30px] tracking-[-0.36] py-2 text-[#FFFFFF]">{item.name}</h1>
                  <p className="text-[12px] leading-[18px] tracking-[-0.36] font-normal pb-2 text-[#FFFFFF]">{item.hospital}</p>
                  <p className="text-[16px] leading-[24px] tracking-[-0.36] font-normal py-3 text-[#FFFFFF]">{item.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-5 justify-center  md:hidden translate-y-[-42%]">
        <div className="border px-4 py-1 border-white w-full rounded-3xl h-[230px]  sm:h-[200px] overflow-hidden ">
                <div className="h-[70px] w-[70px] rounded-full border border-white">
                
                 <Image src="/assets/jockim schork.jpg"
                 alt="img"
                 height={70}
                 width={70}
                 className="rounded-full"/>
                 
                </div>
                <div>
                  <h1 className="text-[20px] leading-[30px] tracking-[-0.36] py-1 text-[#FFFFFF]">Dr. Rajib Bhattacharya</h1>
                  <p className="text-[12px] leading-[18px] tracking-[-0.36] font-normal  text-[#FFFFFF]">Guwahati Medical College Hospital, Assam</p>
                  <p className="text-[16px] leading-[24px] tracking-[-0.36] font-normal py-1 text-[#FFFFFF]">For the last couple of years I am using BPL patient monitors and ECG machines and as per my observation the products </p>
                </div>
              </div>
              <div className="w-full px-4 py-1 border border-white rounded-3xl h-[230px]  sm:h-[200px] overflow-hidden  ">
                <div className="h-[70px] w-[70px] rounded-full border border-white">
                
                <Image src="/assets/tim coook.jpg"
                 alt="img"
                 height={70}
                 width={70}
                 className="rounded-full"/>
                 
                </div>
                <div>
                  <h1 className="text-[20px] leading-[30px] tracking-[-0.36] py-1 text-[#FFFFFF]">Dr. Thomas Methews</h1>
      <p className="text-[12px] leading-[18px] tracking-[-0.36] font-normal  text-[#FFFFFF]"> "Madrid Medical College Hospital, Spain</p>
                  <p className="text-[16px] leading-[24px] tracking-[-0.36] font-normal py-1 text-[#FFFFFF]">For the last couple of years I am using BPL patient monitors and ECG machines and as per my observation the products</p>
                </div>
              </div>
        </div>

      </div>
     
      </div>
    </div>
    
  );
};

export default Testimonials;
