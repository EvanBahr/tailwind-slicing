import React from "react";

export default function Hero() {
  return (
    <div className="px-20">
      <div className="px-32 text-center">
        <h1
          className="w-full text-center text-[90px] font-sans pt-36 font-bold leading-normal tracking-tighter"
          data-aos="zoom-y-out"
        >
          Make your website{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-400 to-teal-400">
            wonderfull
          </span>
        </h1>
        <h1 className="text-2xl w-full">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </h1>
        <div className="flex justify-center space-x-10 pt-9">
          <button className="bg-blue-500 h-[50px] w-[170px] rounded-md text-white text-[15px] font-semibold ">
            Start Free Trial
          </button>
          <button className="bg-black h-[50px] w-[170px] rounded-md text-white text-[15px] font-semibold ">
            Learn more
          </button>
        </div>
        <div className="w-full h-[450px] mt-16 bg-slate-300  flex justify-center items-center ">
          view video
        </div>
      </div>
    </div>
  );
}
