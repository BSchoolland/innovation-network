import React, { Component, useState, useEffect } from "react";
import HeaderLogo from "../public/images/HeaderLogo.png";
import InnovationLogo from "../public/images/innovationlogo.png";
import Background from "../public/images/Background.jpg";

function Header() {
  return (
    <div className="max-w-[1800px] mr-auto ml-auto">
      <div className="bg-transparent w-[100%] flex px-[60px] justify-between
      xlr:px-[40px] lr:mt-[30px]">
        <div className="flex flex-col mt-[30px] z-[10] pl-[20px] items-start">
          <div className="flex flex-col text-[7vw] text-[#005596] 
          font-[600] text-left xxxlr:text-[140px]">
            <h1 className="gradient bg-gradient-to-r from-[#005596] to-[#001E60] bg-clip-text 
            text-transparent fadeInSlow"> Innovation</h1>
            <h1 className="relative bg-gradient-to-r from-[#005596] to-[#001E60] bg-clip-text 
            text-transparent fadeInSlow"> Network
              <img
                  className="w-[20%] absolute bottom-[21%] right-0"
                  src={InnovationLogo}
              ></img>
            </h1>
          </div>

          <div className="text-[#005596] font-[500] text-[30px] text-left mt-[10px]
          pl-[6px] xlr:text-[25px] lr:text-[20px] fadeInSlow">
            Your Space to &thinsp;
            <span className="text-[#001E60]">
              Imagine
            </span>
            , &thinsp;
            <span className="text-[#001E60]">
              Innovate
            </span>
            , &thinsp;
            <span className="text-[#001E60]">
              Solve
            </span>
          </div>
        </div>

        <div className="z-[10] w-[45%] lr:w-[60%] fadeInSlow mt-auto mb-auto">
          <img className="h-fit" src={HeaderLogo}></img>
        </div>
      </div>

      <div className="z-[10] mt-[30px] flex justify-center items-center xlr:mt-[50px]">
          <hr className="border-[1.5px] border-[#005596] w-[100px] mr-[20px] rounded-[30px] lr:mr-0"></hr>
          <button className="py-[10px] px-[40px] bg-[#005596] font-[500]
          text-white text-[20px] rounded-[20px] hover:drop-shadow-[0px_0px_0px_#001E60] 
          hover:translate-y-1 duration-300 drop-shadow-[0px_8px_1px_#001E60] xxlr:scale-[.90] lr:scale-[.75]">
            Click to Explore
          </button>
          <hr className="border-[1.5px] border-[#005596] w-[100px] ml-[20px] lr:ml-0 
          rounded-[30px]"></hr>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-[100vh] bg-cover bg-no-repeat opacity-20 z-[-1]"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
    </div>
  );
}

export default Header;