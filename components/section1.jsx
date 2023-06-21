import React from "react";

function Section1() {
  return (
    <div className="px-20">
      <div className="px-32">
        <h1 className="text-[40px] font-bold text-center ">
          Explore the solutions
        </h1>
        <p className="text-[20px] text-center ">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </p>
      </div>

      <div className="grid grid-cols-2 pt-7">
        <div className="p-5">
          <div>
            <div className="text-3xl font-bold"> Powerful suite of tools</div>
            <div>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa.
            </div>
          </div>
          <div>
            <span className="font-semibold">Building the Simple ecosystem</span>{" "}
            Take collaboration to the next level with security and
            administrative features built for teams.
          </div>
        </div>
        <div className="p-5 bg-slate-300 flex justify-center items-center">
          image
        </div>
      </div>
    </div>
  );
}

export default Section1;
