"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = [
    "About Us",
    "Specialities",
    "Products",
    "Services",
    "Blogs",
    "News & Events",
    "Careers",
  ];
  const listItemsRef = useRef([]);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        listItemsRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        menuRef.current,
        { height: 0 },
        {
          height: "auto",
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        duration: 0.3,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <nav className=" py-4 flex justify-between items-center bg-lightblue-500 2xl:px-48 xl:px-16 lg:px-8 md:px-10 px-5 sm:px-6  ">
   
    <div className="flex-shrink-0">
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        width={191.88}
        height={40}
        className="mt-[3px] w-[191.88px] h-[40px]"
      />
    </div>
  
    
   
  
   
    <ul
  className={`${
    menuOpen ? "flex" : "hidden"
  } lg:flex flex-col lg:flex-row h-auto items-start gap-4 md:gap-8 text-right bg-blue-300 absolute lg:static top-[80px] md:justify-start left-0 w-full lg:w-auto md:bg-transparent md:shadow-none z-10 px-6 md:px-0`}
>
  {menu.map((item, index) => (
    <li
      key={index}
      ref={(el) => (listItemsRef.current[index] = el)}
      className="w-auto h-auto font-bold py-2 md:py-0 text-gray-700 text-sm cursor-pointer hover:text-gray-500 transition text-right"
    >
      {item}
    </li>
  ))}
</ul>

  
    
    <div className="relative group">
      <Image
        src="\assets\Property 1=Component 2 (2).svg"
        alt="contact us"
        height={48}
        width={110}
        className="group-hover:opacity-0 hidden lg:block transition duration-500"
      />
  
      <Image
        src="\assets\Property 1=Variant2.svg"
        alt="button"
        layout="fill"
        className="hidden lg:block absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
      />
    </div>
    <button
      className="lg:hidden text-2xl text-black"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  </nav>
  
  );
};

export default Navbar;
