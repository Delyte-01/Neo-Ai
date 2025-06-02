import { Button } from '@/components/ui/button'
import React from 'react'

const BenefitSection = () => {
  return (
    <div className="min-h-[800px] px-4 lg:px-46 text-white py-7 flex items-center 2xl:px-50 ">
      <div>
        <Button className="rounded-full flex gap-2 mx-auto font-sora font-normal bg-transparent ring-2">
          <div className="w-[25px]">
            <img
              src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748075419/neo-logo-removebg-preview-crop_o5nmab.png"
              alt=""
            />
          </div>
          <span>Benefits</span>
        </Button>
        <h1 className="text-center font-black text-2xl py-3 bg-gradient-to-b from-[#c5bfc8] via-[#ffff] to-[#bbb5c8] bg-clip-text text-transparent md:text-5xl md:max-w-[40%] mx-auto md:leading-12">
          Key Advantages of NeoAI services
        </h1>
        <div className="flex flex-col  gap-4 px-9 py-4 md:flex-row">
          <div className="flex flex-col gap-3 flex-1">
            <div className="relative rounded-2xl overflow-clip shadow-sm shadow-[#2f3338] ">
              <div className="absolute inset-0  w-full   bg-gradient-to-b  from-[#05090e] via-[#221b36] to-[#503d7a]  "></div>
              <div className="relative z-10 h-[230px] p-3  flex flex-col  justify-around">
                <div className="font-sora text-xl">
                  Instant processing of requests
                </div>
                <div className="flex gap-2 items-center  shadow-nav p-2 bg-white/5 backdrop-blur-md rounded-2xl h-[80px]">
                  <div className="w-[25px] h-[20px] flex justify-center mx-auto bg-black p-1 rounded-md ">
                    <img
                      src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748075419/neo-logo-removebg-preview-crop_o5nmab.png"
                      alt=""
                    />
                  </div>
                  <div className="  flex flex-col">
                    <h2 className="text-sm font-sora">
                      Your request is completed{" "}
                    </h2>
                    <p className="text-[10px]">
                      Your delivery is on its way tickects are booked what can i
                      do for you?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-clip shadow-sm shadow-[#2f3338] ">
              <div className="absolute inset-0  w-full   bg-gradient-to-b  from-[#05090e] via-[#221b36] to-[#503d7a]  "></div>
              <div className="relative z-10 h-[170px] p-3  flex flex-col  justify-around">
                <div>
                  <h2 className="font-sora text-xl">99.9% Uptime</h2>
                </div>
                <p className="text-sm">
                  Stable and reliable, ensuring your assistant is always
                  available
                </p>
              </div>
            </div>
          </div>
          <div className=" h-[460px] relative flex shadow-sm shadow-[#2f3338] rounded-2xl overflow-clip justify-center flex-1  ">
            <div className="absolute inset-0  w-full   bg-gradient-to-b  from-[#05090e] via-[#221b36] to-[#503d7a]  "></div>
            <div className="relative z-10 h-[80%] md:h-auto  self-end">
              <img
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1747748990/gpt-phone-2-removebg-preview_h6eki2.png"
                alt="statistical analysis"
              />
            </div>
          </div>
          <div className="h-[460px] relative rounded-2xl overflow-clip shadow-sm shadow-[#2f3338] flex-1">
            <div className="absolute inset-0  w-full   bg-gradient-to-b  from-[#05090e] via-[#221b36] to-[#503d7a]  "></div>
            <div className="relative z-10 ">
              <div className="p-5 flex flex-col gap-2">
                <h2 className="font-sora text-2xl ">Voice control</h2>
                <p className="opacity-80">
                  NeoAI instantly processes requests,places orders, books
                  tickets, and arrange deliveries, helping you save time
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1747925337/ChatGPT_Image_May_22_2025_02_48_34_PM_vhg0ke.png"
                alt="Custom Mic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitSection