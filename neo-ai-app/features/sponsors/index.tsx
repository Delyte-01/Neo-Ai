import RevealGroup from '@/components/animation/reveal-group'
import React from 'react'

const SponsorsSection = () => {
  return (
    <div className=" px-4 lg:px-40 min-h-[20vh] place-content-center py-8">
      <RevealGroup>
        <div className="flex flex-wrap  h-full gap-8 justify-center items-center ">
          <div className=" w-[200px] ">
            <img
              src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748711280/sticth-removebg-preview_yfoz2c.png"
              className="reveal-child"
              alt=""
            />
          </div>
          <div className=" w-[130px] h-[100px] ">
            <img
              src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748711279/hitplay-removebg-preview_bormeo.png"
              alt=""
              className="reveal-child"
            />
          </div>
          <div className=" w-[150px] ">
            <img
              src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748880785/openai-logo-white-1000-removebg-preview_yxpkdz.png"
              alt=""
              className="reveal-child"
            />
          </div>
          <div className=" w-[120px] ">
            <img
              src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748711279/visa-removebg-preview_c9rbla.png"
              alt=""
              className="reveal-child"
            />
          </div>
        </div>
      </RevealGroup>
    </div>
  );
}

export default SponsorsSection