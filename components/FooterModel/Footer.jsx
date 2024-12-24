import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black 2xl:px-28 lg:px-6'>
      <div className='p-6 sm:px-20 md:p-10 lg:p-8 xl:p-12 2xl:p-16 flex flex-col lg:flex-row justify-between  items-start md:items-center gap-8'>
        <div>
          <h1 className='text-white text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] font-semibold'>
            Receive Updates on BPL Medical Technologies
          </h1>
          <div className='flex items-center gap-0'>
            <button className='my-4 text-[#D0DAF5] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] w-40 sm:w-48 font-normal p-3 sm:p-4 border-2 text-start rounded-l-xl border-sky-500'>
              Email address
            </button>
            <Image
              src='/assets/Send.svg'
              alt='send'
              height={0}
              width={0}
              className='h-[48px] sm:h-[58px] w-[48px] sm:w-[58px] ml-[-2px]'
            />
          </div>
          <p className='text-[#2EAAE1] text-[12px] sm:text-[14px] w-full sm:w-80 leading-[18px] sm:leading-[21px] font-normal py-4 text-start'>
            Sign up now to get email updates on our innovative solutions, product launches, events, promotions, and much more.
          </p>
        </div>
        <div>
          <h1 className='text-white text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] font-semibold'>Specialities</h1>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Imaging</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Mother & Child Care</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Cardiology Solutions</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Critical Care & Surgery</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Home Care</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Consumables</p>
        </div>
        <div>
          <h1 className='text-white text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] font-semibold'>Links</h1>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>About Us</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Blogs</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Services</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>News</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Home Care</p>
          <p className='text-[#898989] text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] font-medium pt-4'>Careers</p>
        </div>
        <div className='text-white border-l-2 border-sky-600 pl-4 sm:pl-10 py-6 sm:py-12'>
          <h1 className='text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-semibold'>Our Toll-Free Call Center at</h1>
          <h1 className='text-[20px] sm:text-[24px] leading-[28px] sm:leading-[30px] font-normal pt-6 text-center'>1800-425-2355</h1>
          <h1 className='text-[10px] sm:text-[12px] leading-[20px] sm:leading-[24px] font-normal pt-4 text-center'>9AM-8PM (Monday - Saturday)</h1>
        </div>
      </div>
      <div>
        <p className='mx-6 sm:mx-12 lg:mx-24 mt-8 border-t-2 border-sky-600'></p>
      </div>
      <div className='mt-4 text-white px-4 sm:px-10 py-4 flex flex-col lg:flex-row justify-between  items-center gap-4'>
        <p className='text-[12px] sm:text-[14px] leading-[18px] sm:leading-[24px] font-normal text-sky-600'>© BPL Medical Technologies</p>
        <div className='text-white text-[14px] sm:text-[16px] leading-[20px] sm:leading-[28px] font-normal flex gap-4'>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <div className='flex gap-2'>
          <Image
            src='/assets/youtube.svg'
            height={0}
            width={0}
            alt='youtube'
            className='w-8 sm:w-10 h-8 sm:h-10'
          />
          <Image
            src='/assets/insta.svg'
            height={0}
            width={0}
            alt='insta'
            className='w-8 sm:w-10 h-8 sm:h-10'
          />
          <Image
            src='/assets/Linkedin.svg'
            height={0}
            width={0}
            alt='LinkedIn'
            className='w-8 sm:w-10 h-8 sm:h-10'
          />
          <Image
            src='/assets/Facebook.svg'
            height={0}
            width={0}
            alt='Facebook'
            className='w-8 sm:w-10 h-8 sm:h-10'
          />
          <Image
            src='/assets/Twitter.svg'
            height={0}
            width={0}
            alt='Twitter'
            className='w-8 sm:w-10 h-8 sm:h-10'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
