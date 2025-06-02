import React from 'react'

const SponsorsSection = () => {
  return (
    <div className=" px-4 lg:px-40 min-h-[20vh] place-content-center py-8">
      <div className="flex flex-wrap  h-full gap-8 justify-center items-center">
        <div className=' w-[200px] '>
          <img
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748711280/sticth-removebg-preview_yfoz2c.png"
            alt=""
          />
        </div>
        <div className=' w-[130px] h-[100px] '>
          <img
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748711279/hitplay-removebg-preview_bormeo.png"
            alt=""
          />
        </div>
        <div className=' w-[150px] '>
          <img
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748711279/openAi-removebg-preview_oyb4qf.png"
            alt=""
          />
        </div>
        <div className=' w-[120px] '>
          <img
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748711279/visa-removebg-preview_c9rbla.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SponsorsSection