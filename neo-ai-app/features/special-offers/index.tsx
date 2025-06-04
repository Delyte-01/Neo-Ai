
import Reveal from '@/components/animation/reveal';
import Link from 'next/link';
import React from 'react'

const SpecialOffers = () => {
    return (
      <>
        <div className="text-white px-4 md:px-30 lg:px-50 py-4 hidden md:block">
          <Reveal>
            <div className="overflow-hidden mx-auto rounded-4xl h-[500px] bg-gradient-to-br from-[#6f52d0] via-[#c994fa] to-[#ddac96] flex">
              <div className="flex flex-col justify-center px-6 pl-15 flex-1">
                <h2 className="font-sora text-2xl md:text-4xl font-semibold lg:text-5xl  bg-gradient-to-br from-[#c5bfc8] via-[#ffff] to-[#bbb5c8] bg-clip-text text-transparent md:max-w-[70%] md:leading-15">
                  Smart AI for Your Everyday Needs
                </h2>
                <p className="text-sm text-gray-300 mb-4 md:text-[16px] md:max-w-[50%]">
                  A smart app for shopping, delivery, and travel — available on
                  the App Store and Google Play.
                </p>
                <div className="flex flex-wrap gap-3 ">
                  <Link
                    href={
                      "https://www.bing.com/search?q=apple%20store%20download&qs=n&form=QBRE&sp=-1&ghc=2&lq=0&pq=apple%20store%20download&sc=12-20&sk=&cvid=604832AC0F35459EABE3948E155B61F6"
                    }
                    className="flex items-center gap-2  rounded-md px-3 py-2 h-17 w-45 bg-white"
                  >
                    <img
                      src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748941307/apple_1-removebg-preview_nfkiqr.png"
                      alt=""
                    />
                  </Link>
                  <Link
                    href={
                      "https://www.bing.com/search?qs=AS&pq=google+play+&sk=CSYN1&sc=15-12&pglt=41&q=google+play+store&cvid=332718646cb749739c95d2068a00b2aa&gs_lcrp=EgRlZGdlKgYIARAAGEAyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQLhhAMgYIBRAuGEAyBggGEAAYQDIGCAcQABhAMgYICBBFGDzSAQkxNTU2MWowajGoAgCwAgA&FORM=ANNTA1&PC=U531"
                    }
                    className="flex items-center gap-2  rounded-md px-3 py-2 bg-white h-17 w-45"
                  >
                    <img
                      src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748941307/google_play-removebg-preview_xnygej.png"
                      alt=""
                      className=""
                    />
                  </Link>
                </div>
              </div>
              <div className="flex-1 ">
                <img
                  src="https://res.cloudinary.com/dk5mfu099/image/upload/v1747749648/ChatGPT_Image_May_20__2025__01_59_27_PM-removebg-preview_wctuk2.png"
                  alt="special offers image"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </>
    );
}

export default SpecialOffers