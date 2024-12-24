import Image from "next/image";
import React from "react";

const Criticalcare = () => {
  return (
    <div className="py-16 px-5 2xl:px-48 xl:px-16 lg:px-8 md:px-10  sm:px-6  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-3 gap-8 2xl:gap-24">
        {/* Card 1 */}
        <div className="relative border rounded-xl p-6 overflow-hidden group bg-white transition-all duration-500 hover:bg-black hover:bg-opacity-75">
          <Image
            src="/assets/critical bg.png"
            alt="imaging"
            fill
            className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          />
          <Image
            src="/assets/critical logo.svg"
            alt="Logo 2"
            width={60}
            height={40}
            className="transition-transform duration-500 group-hover:invert"
          />
          <h1 className="text-[20px] font-semibold  py-3 text-black transition-colors duration-500 group-hover:text-white">
            Critical Care & Surgery
          </h1>
          <p className="text-[14px] leading-[18px] font-normal  text-gray-700 transition-colors duration-500 group-hover:text-gray-300">
            We understand that every second is critical when it comes to life-saving moments, and our offerings ensure that you are well equipped to manage them with utmost confidence.
          </p>
          <div className="flex items-center justify-end mt-4">
            <h1 className="text-[14px] font-semibold  transition-colors duration-500 group-hover:text-white">
              Learn More
            </h1>
            <Image
              src="/assets/YT6fDRXu8Mxbc8A05fbLnK9cYk.svg"
              alt="arrow"
              height={35}
              width={35}
              className="ml-2 transition-transform duration-500 group-hover:invert group-hover:scale-110"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative border rounded-xl p-6 overflow-hidden group bg-white transition-all duration-500 hover:bg-black hover:bg-opacity-75">
          <Image
            src="/assets/imaging bg.png"
            alt="imaging"
            fill
            className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          />
          <Image
            src="/assets/div.framer-vcrbx@2x.svg"
            alt="Logo 2"
            width={60}
            height={40}
            className="transition-transform duration-500 group-hover:invert"
          />
          <h1 className="text-[20px] font-semibold  py-3 text-black transition-colors duration-500 group-hover:text-white">
            Imaging
          </h1>
          <p className="text-[14px] leading-[18px] font-normal  text-gray-700 transition-colors duration-500 group-hover:text-gray-300">
            With innovation at its core, our imaging range includes C-ARMs, Fixed and Mobile X Rays, Color Dopplers, and Ultrasounds. Built on world-class technologies, our systems conform...
          </p>
          <div className="flex items-center justify-end mt-4">
            <h1 className="text-[14px] font-semibold  transition-colors duration-500 group-hover:text-white">
              Learn More
            </h1>
            <Image
              src="/assets/YT6fDRXu8Mxbc8A05fbLnK9cYk.svg"
              alt="arrow"
              height={35}
              width={35}
              className="ml-2 transition-transform duration-500 group-hover:invert group-hover:scale-110"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative border rounded-xl p-6 overflow-hidden group bg-white transition-all duration-500 hover:bg-black hover:bg-opacity-75">
          <Image
            src="/assets/mother and child bg.png"
            alt="imaging"
            fill
            className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          />
          <Image
            src="/assets/mother logo.svg"
            alt="Logo 2"
            width={60}
            height={40}
            className="transition-transform duration-500 group-hover:invert"
          />
          <h1 className="text-[20px] font-semibold  py-3 text-black transition-colors duration-500 group-hover:text-white">
            Mother & Child Care
          </h1>
          <p className="text-[14px] leading-[18px] font-normal  text-gray-700 transition-colors duration-500 group-hover:text-gray-300">
            At BPL, we ensure you don’t miss a beat in bringing safe & gentle care into the most delicate moments of every mother and a new life, with innovations in precision maternal monitoring equipment.
          </p>
          <div className="flex items-center justify-end mt-4">
            <h1 className="text-[14px] font-semibold  transition-colors duration-500 group-hover:text-white">
              Learn More
            </h1>
            <Image
              src="/assets/YT6fDRXu8Mxbc8A05fbLnK9cYk.svg"
              alt="arrow"
              height={35}
              width={35}
              className="ml-2 transition-transform duration-500 group-hover:invert group-hover:scale-110"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative border rounded-xl p-6 overflow-hidden group bg-white transition-all duration-500 hover:bg-black hover:bg-opacity-75">
          <Image
            src="/assets/cardiology bg.png"
            alt="imaging"
            fill
            className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          />
          <Image
            src="/assets/cardiology logo.svg"
            alt="Logo 2"
            width={60}
            height={40}
            className="transition-transform duration-500 group-hover:invert"
          />
          <h1 className="text-[20px] font-semibold  py-3 text-black transition-colors duration-500 group-hover:text-white">
            Cardiology Solutions
          </h1>
          <p className="text-[14px] leading-[18px] font-normal  text-gray-700 transition-colors duration-500 group-hover:text-gray-300">
            When it comes to assisting you with your cardiac needs, we leave no stone unturned. With a strong foothold in cardiology since 1967, BPL Medical offers a wide variety of cardiology solutions...
          </p>
          <div className="flex items-center justify-end mt-4">
            <h1 className="text-[14px] font-semibold  transition-colors duration-500 group-hover:text-white">
              Learn More
            </h1>
            <Image
              src="/assets/YT6fDRXu8Mxbc8A05fbLnK9cYk.svg"
              alt="arrow"
              height={35}
              width={35}
              className="ml-2 transition-transform duration-500 group-hover:invert group-hover:scale-110"
            />
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative border rounded-xl p-6 overflow-hidden group bg-white transition-all duration-500 hover:bg-black hover:bg-opacity-75">
          <Image
            src="/assets/bg1.png"
            alt="imaging"
            fill
            className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          />
          <Image
            src="/assets/homecare logo.svg"
            alt="Logo 2"
            width={60}
            height={40}
            className="transition-transform duration-500 group-hover:invert"
          />
          <h1 className="text-[20px] font-semibold  py-3 text-black transition-colors duration-500 group-hover:text-white">
            Home Care
          </h1>
          <p className="text-[14px] leading-[18px] font-normal  text-gray-700 transition-colors duration-500 group-hover:text-gray-300">
            The care cycle doesn't always end at the hospital, and that's why we have best-in-class solutions extending our care right from the hospital to home. Ranging from Blood Pressure...
          </p>
          <div className="flex items-center justify-end mt-4">
            <h1 className="text-[14px] font-semibold  transition-colors duration-500 group-hover:text-white">
              Learn More
            </h1>
            <Image
              src="/assets/YT6fDRXu8Mxbc8A05fbLnK9cYk.svg"
              alt="arrow"
              height={35}
              width={35}
              className="ml-2 transition-transform duration-500 group-hover:invert group-hover:scale-110"
            />
          </div>
        </div>

        {/* Card 6 */}
        <div className="relative border rounded-xl p-6 overflow-hidden group bg-white transition-all duration-500 hover:bg-black hover:bg-opacity-75">
          <Image
            src="/assets/Patient-cables.png"
            alt="imaging"
            fill
            className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          />
          <Image
            src="\assets\div.framer-vcrbx (5).svg"
            alt="Logo 2"
            width={60}
            height={40}
            className="transition-transform duration-500 group-hover:invert"
          />
          <h1 className="text-[20px] font-semibold  py-3 text-black transition-colors duration-500 group-hover:text-white">
          Consumables
          </h1>
          <p className="text-[14px] leading-[18px] font-normal  text-gray-700 transition-colors duration-500 group-hover:text-gray-300">
          Small things add great value. Quality consumables from BPL add value to routine procedures with and experience better outcomes and experience better outcomes.Trusted products that ensure.....
          </p>
          <div className="flex items-center justify-end mt-4">
            <h1 className="text-[14px] font-semibold  transition-colors duration-500 group-hover:text-white">
              Learn More
            </h1>
            <Image
              src="/assets/YT6fDRXu8Mxbc8A05fbLnK9cYk.svg"
              alt="arrow"
              height={35}
              width={35}
              className="ml-2 transition-transform duration-500 group-hover:invert group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criticalcare;
