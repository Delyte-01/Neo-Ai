import { Button } from '@/components/ui/button';
import { ArrowUpRight, Camera, Check } from 'lucide-react';
import React from 'react'

const HeroSection = () => {
  return (
    <div
      className="
             min-h-[110vh] md:min-h-[120vh] pt-[160px] mt-[-100px] lg:px-46 px-3 bg-[#0A0A0A] overflow-clip relative"
    >
      <div className="absolute inset-0  w-full   bg-gradient-to-b  from-[#1f1737] via-[#d59fef] to-[#3f3188] "></div>
      <div className="relative z-10 px-10 py-14  text-white flex justify-center text-center gap-2 flex-col ">
        <h1 className="text-4xl md:text-6xl font-black leading-11 bg-gradient-to-b from-[#c5bfc8] via-[#ffff] to-[#bbb5c8] bg-clip-text text-transparent  md:max-w-[50%] mx-auto pb-2 md:leading-16 ">
          Start AI for Your Everyday Needs
        </h1>
        <p className="font-medium text-sm md:text-[20px] pb-4 md:max-w-[39%] mx-auto font-sora ">
          Smart solutions to simplify your purchases, deliveries, and travel
          planning
        </p>
        <Button className="rounded-full bg-white text-[#191425] flex w-[150px] mx-auto hover:bg-gray-300 transition shadow-md duration-300 ease-in-out cursor-pointer md:py-2">
          Try now
          <span>
            <ArrowUpRight />
          </span>
        </Button>
        <div className=" mt-5 rounded-full overflow-clip flex justify-center shadow-lg md:w-[400px]  mx-auto ">
          <img
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1747748989/gpt-phone-1-removebg-preview_dsyoa6.png"
            alt="AI image"
          />
        </div>
        <div className=" hidden md:flex absolute w-[300px] h-[200px] rounded-2xl shadow-nav skew-6 bg-white/5 backdrop-blur-md shadow-[#e4c16794] p-3  flex-col justify-center gap-2 left-[-50px] xl:left-0 ">
          <div className="  w-[70px] h-[70px] mx-auto  relative">
            <img
              src="https://res.cloudinary.com/dk5mfu099/image/upload/v1747926464/This_striking_digital_artwork_captures_the_essence_of_a_mysterious_bearded_figure_tlzxwi.jpg"
              alt=""
              className="rounded-full  border-2"
            />
            <span className="absolute border bottom-0 right-0 bg-white text-black p-1 rounded-full">
              <Camera size={15} />
            </span>
          </div>
          <div>
            <h2 className="font-bold">Complete Your Profile</h2>
            <p className="text-sm">Create a profile in your style</p>
          </div>
        </div>
        <div className=" hidden md:flex flex-col absolute w-[300px] h-[200px] rounded-2xl right-0  shadow-nav shadow-[#ffffff81] skew-x-12 bg-white/5 backdrop-blur-md justify-center px-3">
          <div className=" flex px-4 items-center gap-3">
            <span className="border-2 rounded-full w-[20px] h-[20px]"></span>
            <div>
              <h2 className="font-black ">Monthly</h2>
              <p className="text-sm">$20 / month</p>
            </div>
          </div>
          <div className=" flex px-4 items-center gap-3">
            <span className=" rounded-full w-[20px] h-[20px] text-black flex justify-center bg-white items-center">
              <Check size={12} />
            </span>
            <div>
              <h2 className="font-black ">Yearly</h2>
              <p className="text-sm">$200 / year</p>
            </div>
            <span className="ml-auto bg-white text-black rounded-2xl p-1 text-[10px] font-bold">
              Best Value
            </span>
          </div>
          <div className=" flex px-4 items-center gap-3">
            <span className="border-2 rounded-full w-[20px] h-[20px]"></span>
            <div>
              <h2 className="font-black ">Lifetime</h2>
              <p className="text-sm">$480 / month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection